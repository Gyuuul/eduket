import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Common from '../../components/common/Common'
import { inputTogether } from '../../store/slice/togetherSlice';
import StudyDelete from './StudyDelete';
import getUserProfile from '../profile/getUserProfile';
import { setUserInfo } from '../../store/slice/userSlice';
import MoreButton from '../../assets/icons/icon/icon-more.webp'
import instance from '../../lib/apis/interceptor';

export default function StudyDetail() {
    const {productId}= useParams();
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const myAccountName= useSelector((state)=> state.user.myInfo.accountname);
    const [visible, setVisible]= useState(false);
    const [detail, setDetail]= useState('');
    const [userAccountName, setUserAccountName]= useState();

    const Details= async ()=> {
        try {
            const response = await instance.get(`/product/detail/${productId}`);
            const data= response.data?.product;
            setDetail(data);
    
            const {itemImage, itemName, link, price}= detail;
            dispatch(inputTogether({ itemImage, itemName, link, price }));
            setUserAccountName(response.data?.product?.author?.accountname);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        Details();
    }, []);

    async function setUser(accountname) {
        const user = await getUserProfile(accountname);
        dispatch(setUserInfo(user));
    }

    const handleStudyModify= ()=> {
        navigate(`/together/modify/${productId}`);
    }

    const page= (
        <DetailWrap>
            <Detail>
                {detail && (
                    <StudyDiv>
                        <DetailTop>
                            <AuthorDiv onClick={async()=>{
                                await setUser(detail?.author?.accountname);
                                if(detail?.author?.accountname === myAccountName){
                                    navigate('/myprofile');
                                }else{
                                    navigate(`/profile/${detail?.author?.accountname}`);
                                }
                            }}>  
                                <ProfileImg src={detail?.author?.image} alt='유저 프로필 이미지'/>
                                <Author>{detail?.author?.accountname}</Author>
                            </AuthorDiv>

                            <ToggleDiv>
                                { myAccountName=== userAccountName && (
                                    <>
                                        <ToggleImg src={MoreButton} onClick={() => setVisible(!visible)} alt="게시글 삭제 및 수정 토글 이미지" />
                                        { visible && (
                                            <>
                                                <ToggleWrapper>
                                                    <div onClick={() => handleStudyModify()}>
                                                        <P>수정</P>
                                                    </div>
                                                    <StudyDelete />
                                                </ToggleWrapper>
                                            </>
                                        )}
                                        
                                    </>
                                )}
                            </ToggleDiv>
                        </DetailTop>
                        
                        <Title>{detail?.itemName}</Title>
                        <Content>{detail?.link}</Content>
                        <Div>
                            <Img src={detail?.itemImage} alt='스터디 대표 이미지'/>
                        </Div>
                    </StudyDiv>
                )}
        </Detail>
    </DetailWrap>
    )
    return (
        <>
            <Common page={page} />
        </>
    );
}
const DetailWrap= styled.div`
    padding: 30px 0;
    background-color: #f1f2f3;
`
const Detail= styled.div`
    width: 1280px;
    margin: 0 auto;
    padding: 120px 0 0 0;
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
const StudyDiv= styled.div`
    padding: 30px 40px;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 15px;
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
        width: 600px;
        margin: 0 auto;
    }
`
const DetailTop= styled.div`
    display: flex;
    justify-content: space-between;
`
const AuthorDiv= styled.div`
    display: flex;
    gap: 15px;
    margin: 0 0 24px 100px;
    @media screen and (max-width: 800px) {
        margin: 0 0 24px 0;
    }
`
const ProfileImg= styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
const Author= styled.strong`
    padding: 8px 0px;
    font-family: "Frutiger-lt-pro-normal";
    font-size: 20px;
    color: #3a3a3a; 
`
const Title= styled.p`
    margin: 0 0 24px 100px;
    font-family: "Noto_Sans_KR-600";
    font-size: 25px;
    font-weight: 700;
    line-height: 40px;
    color: #3a3a3a; 
    @media screen and (max-width: 800px) {
        margin: 0 0 24px 0;
    }
`
const Content= styled.p`
    margin: 0 0 24px 100px;
    font-family: "Noto_Sans_KR-400";
    font-size: 20px;
    line-height: 30px;
    color: #3a3a3a; 
    @media screen and (max-width: 800px) {
        margin: 0 0 24px 0;
    }
`
const Div= styled.div`
    width: 1000px;
    height: 600px;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
        width: 820px;
        height: 600px;
    }
    @media screen and (max-width: 1100px) {
        width: 720px;
        height: 600px;
    }
    @media screen and (max-width: 800px) {
        width: 520px;
        height: 600px;
    }
`
const Img= styled.img`
    width: 100%;
    height: 600px;
    object-fit: cover;
`
const P= styled.p`
    margin-bottom: 5px;
    font-family: "Noto_Sans_KR-400";
    font-size: 14px;
`
const ToggleDiv= styled.div`
    position: relative;
`
const ToggleWrapper = styled.section`
    position: absolute;
    width: 100px;
    right: 120px;
    margin: -45px 25px 0 0;
    padding: 10px 0;
    border-radius: 10px;
    border-top-right-radius: 0;
    background-color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    z-index: 3;
`
const ToggleImg= styled.img`
    width: 40px;
    height: 40px;
    margin-right: 100px;
    margin-top: 5px;
`