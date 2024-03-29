import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../components/common/Common';
import { getMyPostList, getMyStudyList } from './MyList';
import PostStudy from './PostStudy';

export default function MyProfile() {
    const user= useSelector((state)=> state.user?.myInfo);
    const navigate= useNavigate();
    const [postList, setPostList]= useState([]);
    const [studyList, setStudyList]= useState([]);

    useEffect(()=>{
        const myList= async()=> {
            const postData= await getMyPostList();
            setPostList([...postData]);
            const studyData= await getMyStudyList();
            setStudyList([...studyData]);
        }
        myList();
    }, [])

    const pageTitle = 'MY PROFILE';
    const pageDesc = `나의 정보와 게시글, 스터디를 확인합니다.`;
    const page= (
        <>
            <ProfileWrap>
                <MyProfileDiv>
                    <Title><h2>MY PAGE</h2></Title>
                    <MypageMenu>
                        <li><a href="https://gyuuul.github.io/eduket/#/myprofile">Content</a></li>
                        <li><a href="https://gyuuul.github.io/eduket/#/myprofile/update">Profile</a></li>
                    </MypageMenu>
                    <Wrap>
                        <ProfileDiv>
                            <Img src={user?.image} alt="나의 프로필 이미지" />
                            <Profiles>
                                    <Name>{user?.username}</Name>
                                    <Id>@ {user?.accountname}</Id>
                                <FollowDiv>
                                    <Link to={`/profile/${user?.accountname}/follower`} aria-label="팔로우 페이지"><Follow>Follower <strong>{user?.followerCount}</strong></Follow></Link>
                                    <Link to={`/profile/${user?.accountname}/following`} aria-label="팔로잉 페이지"><Follow>Following <strong>{user?.followingCount}</strong></Follow></Link>
                                </FollowDiv>
                            </Profiles>
                            <Intro>{user?.intro}</Intro> 
                        </ProfileDiv>
                        <PostStudy
                            itemList={postList}
                            itemClick={(id) => navigate(`/post/detail/${id}`)}
                            itemRenderer="post"
                        />
                        <PostStudy
                            itemList={studyList}
                            itemClick={(id) => navigate(`/together/detail/${id}`)}
                            itemRenderer="study"
                        />
                    </Wrap>
                </MyProfileDiv>
            </ProfileWrap>
        </>
    )
    return (
        <>
            <Common page={page} title={pageTitle} desc={pageDesc} />
        </>
    );
}
const ProfileWrap= styled.div`
    padding: 30px 0;
    background-color: #f1f2f3;
`
const MyProfileDiv= styled.div`
    max-width: 1400px;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
        width: 1100px;
    }
    @media screen and (max-width: 1100px) {
        width: 1000px;
    }
    @media screen and (max-width: 800px) {
        width: 700px;
    }
`
const Title= styled.div`
    padding: 200px 0 90px 0;
    border: none;
    font-size: 40px;
    text-align: center;
    color: #2b2b2b;
    &h2{
        display: inline-block;
        font-family: "Frutiger-lt-pro-600";
        color: #2b2b2b;
    }
`
const Wrap= styled.div`
    padding: 40px 80px;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 50px;
    background-color: #ffff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    @media screen and (max-width: 1200px) {
        width: 1000px;
        margin: 0 auto;
    }
    @media screen and (max-width: 1100px) {
        width: 900px;
        margin: 0 auto;
    }
    @media screen and (max-width: 800px) {
        width: 500px;
        margin: 0 auto;
    }
`
const MypageMenu= styled.ul`
    margin: 0 0 60px 0;
    text-align: center;
    & li{
        display: inline-block;
        margin: 0 20px;
        font-family: "Frutiger-lt-pro-600";
    }
    & li a{
        margin: 0 30px 0 10px;
        border-bottom: 2px solid transparent;
        font-size: 20px;
        font-weight: 600;
        line-height: 1.1;
        color: #868686;
    }
    & li a:hover, a:active{
    color: #A73121;
    border-bottom: 2px solid #A73121;
    }
`
const ProfileDiv= styled.div`
    display: flex;
    gap: 70px;
    padding: 50px 0 60px 0; 
    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`
const Img= styled.img`
    width: 200px;
    height: 200px;
    margin-left: -10px;
    border-radius: 50%;
`
const Profiles= styled.div`
    margin-top: 25px;
`
const Name= styled.h2`
    font-family: "Frutiger-lt-pro-normal";
    font-size: 30px;
    color: #2b2b2b;
    @media screen and (max-width: 800px) {
        text-align: center;
    }
`
const Id= styled.h3`
    margin-bottom: 20px;
    font-family: "Frutiger-lt-pro-normal";
    font-weight: 500;
    font-size: 18.85px;
    color: #777;
    @media screen and (max-width: 800px) {
        text-align: center;
    }
`
const FollowDiv= styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 40px 0;
`
const Follow= styled.p`
    font-family: "Frutiger-lt-pro-normal";
    font-weight: 400;
    font-size: 18.85px;
    color: #777;
    & strong{
        color: #2b2b2b;
    }
`
const Intro= styled.p`
    flex-grow: 1;
    margin-top: -10px;
    padding: 30px;
    border-radius: 50px;
    background-color: #f1f2f3;
    font-family: "Noto_Sans_KR-400";
    font-size: 18px;
    color: #2b2b2b;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
`
export const PostStudyDiv= styled.div`
    padding: 30px 0; 
    border-top: 1px solid rgba(0,0,0,0.09);
`
export const SubTitle= styled.p`
    margin: 0 0 50px 0;
    font-family: "Frutiger-lt-pro-600";
    font-size: 30px;
    font-weight: 600;
    line-height: 1.1;
    text-align: center;
`
export const Alert= styled.p`
    padding: 50px 0 30px;
    font-family: "Noto_Sans_KR-600";
    font-size: 30px;
    text-align: center;
    color: #C63D2F;
`
export const StudyName= styled.p`
    font-family: "Noto_Sans_KR-600";
    font-size: 20px;
    font-weight: 700;
    color: #3a3a3a;
`
export const StudyIntro= styled.p`
    margin-top: 20px;
    font-family: "Noto_Sans_KR-400";
    font-size: 17px;
    color: #777;
    line-height: 25px;
`
export const Ul= styled.ul`
    display: flex;
    margin: 0 0;
    padding: 0 0;
    flex-wrap: wrap;
    box-sizing: border-box;
    line-height: 0;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }   
`
export const Li= styled.li`
    flex: 0 0 33.33333%;
    margin: 0 0 50px 0;
    padding: 0 0 0;
    vertical-align: top;
    @media screen and (max-width: 1200px) {
        flex: 0 0 33.5%;
    }
    @media screen and (max-width: 1100px) {
        flex:0 0 50%;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`
export const Div= styled.div`
    width: 300px;
    height: 400px;
    margin: 0 auto;
    padding: 12px 20px;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 15px;
    background-color: #f1f2f3;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    & img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    & p {
        margin: 30px 0 0 0px;
        font-family: "Noto_Sans_KR-400";
        line-height: 28px;
    }
`