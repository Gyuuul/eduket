import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Common from '../../components/common/Common'
import { URL } from '../../lib/apis/constant/path'
import { Study } from './Study';
import { StudyImage } from './StudyImage';
import instance from '../../lib/apis/interceptor';

export const StudyUpload=() => {
    const [userToken, setUserToken] = useState();
    const [itemName, setItemName] = useState('');
    const [link, setLink] = useState('');
    const [itemImage, setItemImage] = useState('');
    const navigate= useNavigate();

    useEffect(()=>{
        setUserToken(localStorage.getItem('Access Token'));
    },[]);

        const handleSubmit= async (e) =>{
            e.preventDefault();
            try{
                await instance.post(`${URL}/product`, 
                    {
                        product: {
                            itemName: itemName,
                            price: 9999999,
                            link: link,
                            itemImage: itemImage,
                        },
                    })
            navigate(`/together`);
            }catch(error){
                console.log(error);
            }
        };

    const page= (
        <UploadWrap>
            <UploadDiv>
                <Wrap>
                    <Title>
                        <h2>STUDY</h2>
                    </Title>
                    <Description>만들고 싶은 스터디를 소개해주세요.</Description>
                    <form method='POST' encType='multipart/form-data' onSubmit={handleSubmit}>
                        <Study
                            itemName={itemName}
                            setItemName={setItemName}
                            link={link}
                            setLink={setLink}
                        />
                    </form>
                    <Div>
                        <StudyImage itemImage={itemImage} setItemImage={setItemImage}/>
                        <Button onClick={handleSubmit} aria-label="스터디 등록 ">스터디 등록하기</Button>
                    </Div>    
                </Wrap>
            </UploadDiv>
        </UploadWrap>
    )
    return (
        <>
            <Common page={page} />
        </>
    );
}
const UploadWrap= styled.div`
    padding: 200px 0;
    background-color: #dae1e6;
`
const UploadDiv= styled.div`
    max-width: 1400px;
    margin: 0 auto;
`
const Wrap= styled.div`
    padding: 40px 80px 90px;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 15px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    background-color: #ffff;
`
const Title= styled.div`
    padding: 50px 0 20px;
    border: none;
    font-size: 40px;
    text-align: center;
    color: #2b2b2b;
    &h2{
        display: inline-block;
        color: #2b2b2b;
    }
`
const Description= styled.h3`
    margin-bottom: 30px;
    font-size: 20px;
    text-align: center;
    color: #868686;
`
const Div= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button= styled.button`
    width: 400px;
    height: 60px;
    border: 1px solid #C63D2F;
    border-radius: 5px;
    background: #C63D2F;
    font-size: 15px;
    font-weight: 400;
    line-height: 60px;
    color: #fff;
    cursor: pointer;
`