import React from 'react'
import styled from 'styled-components';

import swiper from '../../assets/icons/illustration/Swiper.gif'
import frame from '../../assets/icons/illustration/Frame.png'
import block from '../../assets/icons/illustration/block.jpg'
import post from '../../assets/icons/illustration/Post.gif'
import study from '../../assets/icons/illustration/Study.gif'
import mentoring from '../../assets/icons/illustration/Mentoring.gif'

export default function MainBody() {

    return (
        <>
            <MainDiv>
                <Main>            
                    <SwiperDiv>
                        <FullImage>
                            <img src={swiper} alt="" />
                            <MainSwiper>
                                <img src={frame} alt="" />
                            </MainSwiper>
                        </FullImage>
                    </SwiperDiv>

                    <CommonSection>
                        <img src={post} alt="" />
                        <Div>
                            <Title>EDUKET POST</Title>
                            <Description>
                                EDUKET POST는 취업준비생부터 현직자까지 직무에 대한<br/> 
                                지식 공유를 통해 모두가 함께 성장하는 공간입니다.<br/>
                                취업에서부터 전문가로 성장하는 여정을 함께 나누며, 더 나은 <strong>커리어</strong>를 만들어가세요!
                            </Description>
                        </Div>
                    </CommonSection>

                    <CommonSection>
                        <img src={study} alt="" />
                        <Div>
                            <Title>EDUKET STUDY</Title>
                            <Description>
                                EDUKET STUDY는 다양한 주제의 스터디 및 모임을 개설하고 참여할 수 있는 공간입니다.<br/> 
                                <strong>전공 공부, 면접 준비, 직무 탐색</strong> 등 다양한 활동을 통해<br/> 
                                스터디원끼리 소통하고 지식을 공유하며 함께 공부해요!<br/> 
                            </Description>
                        </Div>
                    </CommonSection>

                    <CommonSection>
                        <img src={mentoring} alt="" />
                        <Div>
                            <Title>EDUKET MENTORING</Title>
                            <Description>
                                EDUKET MENTORING은 멘토들이 자신의 분야에서 필요한 기초적인 스킬을 가르치고<br/> 
                                멘티들은 실전 경험을 통해 성장하는 소중한 공간입니다.<br/> 
                                <strong>멘토링학습</strong>을 통해 함께 배우고 공유하며 성공을 향해 함께 나아가요!

                            </Description>
                        </Div>
                    </CommonSection>
                </Main>
            </MainDiv>
        </>
    )
}
const MainDiv= styled.div`
    background-image: url(${block});
    background-repeat: repeat;
    padding: 30px 0;
`
const Main= styled.div`
    max-width: 1400px;
    /* min-width: 1200px; */
    margin: 0 auto;
`
const SwiperDiv= styled.div`
    margin-bottom: -15px;
`
const FullImage= styled.div`
    position: relative;
    
    & img {
        display: block;
        width: 51.5%;
        margin: 0 auto;
        padding: 160px 0 50px 0;
    }
`
const MainSwiper= styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    top: -3.5%;

    & img {
        width: 67%;
    }
`
const Div= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 30px 30px;
`
const Title= styled.p`
    font-family: "Pretendard-600";
    font-size: 30px;
    font-weight: 600;
    letter-spacing: -1.5px;
    text-align: center;
    margin: 0 40px;
    color: #101010;
`
const Description= styled.p`
    flex-grow: 1;
    font-family: "Noto_Sans_KR-400";
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    margin: 0 40px;
    color: #3a3a3a;
`
const CommonSection= styled.section`
padding: 30px;
    max-width: 1400px;
    border-radius: 20px;
    background: #fff;
    margin-bottom: 50px;

    & img {
        width: 100%;
    }
`
