import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import getUserProfile from '../profile/getUserProfile';
import { setUserInfo } from '../../store/slice/userSlice';
import { useDispatch } from 'react-redux';

export default function ItemLi({ data }) {
    const navigate= useNavigate();
    const dispatch= useDispatch();

    async function setUser(accountname){
        const user= await getUserProfile(accountname);
        dispatch(setUserInfo(user));
    }
    return (
        <>
            <ul>
                <ItemList>
                    <ItemDiv>
                        <div onClick={async ()=>{
                            await setUser(data?.author?.accountname);
                            navigate(`/profile/${data?.author?.accountname}`);
                        }}>
                            <Author>@ {data?.author?.accountname}</Author>
                        </div>
                        <ContentDiv
                            onClick={() => {
                                navigate(`/together/detail/${data.id}`);
                        }}>
                            <picture>
                                <source srcset={data?.itemImage} type="image/webp" />
                                <img src={data?.itemImage} alt='스터디 대표 이미지'/>
                            </picture>
                            <Div>
                                <ItemName>{data.itemName}</ItemName>
                                <ItemDetail>{data.link}</ItemDetail>
                            </Div>    
                        </ContentDiv>
                    </ItemDiv>
                </ItemList>
            </ul>
        </>
    );
}
const ItemList = styled.li`
    width: 100%;
    transform: translateY(8%);
`
const ItemDiv= styled.div`
    height: 450px;
    margin: 0 15px;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 15px;
    background-color: #ffff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    @media screen and (max-width: 800px) {
        height: 400px;
    }
`
const ContentDiv = styled.div`
    width: 350px;
    margin: 0 auto;
    & img {
        width: 100%;
        height: 200px;
        margin-top: 20px;
        object-fit: cover;
    }
`
const Div= styled.div`
    margin: 30px 20px 0 0;
`
const ItemName= styled.p`
    margin-bottom: 30px;
    font-family: "Noto_Sans_KR-600";
    font-size: 20px;
    color: #3a3a3a;
`
const ItemDetail= styled.p`
    margin-top: 20px;
    font-family: "Noto_Sans_KR-400";
    font-size: 17px;
    color: #777;
    line-height: 25px;
`
const Author = styled.p`
    font-family: "Frutiger-lt-pro-normal";
    float: left;
    font-weight: 600;
    margin: 30px 40px 10px 20px;
    color: #3a3a3a; 
`

