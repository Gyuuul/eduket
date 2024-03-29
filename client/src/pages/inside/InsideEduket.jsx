import React from 'react'
import styled from 'styled-components'
import Common from '../../components/common/Common'
import inside from '../../assets/icons/illustration/Inside.webp'
import chalse from '../../assets/icons/character/chalse.webp'
import miya from '../../assets/icons/character/miya.webp'
import coco from '../../assets/icons/character/coco.webp'
import toby from '../../assets/icons/character/toby.webp'
import runa from '../../assets/icons/character/runa.webp'
import Section from ".";

export default function InsideEduket() {
    const character=[
        {
            image: toby,
            name: 'TOBY',
            tag: 'MBTI : INFJ',
            introduce: '토비는 매우 온순하고 다른 이들에게 먼저 도움의 손길을 내미는 멘토 고양이다. 그러나 너무 섬세한 성격으로, 불쾌한 말을 듣게 되면 쉽게 우울해질 수 있으니 주의가 필요하다.'
        },
        {
            image: coco,
            name: 'COCO',
            tag: 'MBTI : ENFP',
            introduce: '코코는 활기차고 사교적인 성격을 가졌다. 항상 배우고 싶어 하며 늘 새로운 친구를 만나기를 기대하며, 유쾌한 에너지로 주변을 활력차게 만들어준다.'
        },
        {
            image: chalse,
            name: 'CHALSE',
            tag: 'MBTI : ENFJ',
            introduce: '찰스는 생김새 때문인지 친구들에게 항상 든든하고 멋진 느낌을 주지만, 속은 감수성이 풍부하여 떨어지는 낙엽을 보고 눈물을 흘리기도 한다.'
        },
        {
            image: miya,
            name: 'MIYA',
            tag: 'MBTI : ISTJ',
            introduce: '미야는 신중하고 신뢰성 있는 성격으로, 친구들에게 믿음을 주기 때문에 함께 스터디하고 싶은 고양이 1위이다. 그러나 가끔은 고요한 공간이 필요하며, 혼자만의 시간을 소중히 여기는 편이다.'
        },
        {
            image: runa,
            name: 'RUNA',
            tag: 'MBTI : ESTP',
            introduce: '루나는 어떤 상황에서도 차분하게 대처하는 부드러움의 대명사다. 다른 이들에게 도움을 주는 것을 즐기며, 항상 포근한 미소를 지니고 있어 주변을 화사하게 만든다.'
        },
    ]

    const pageTitle = 'EDUKET의 소개';
    const pageDesc = `진로 개발과 취업, 자기계발에 필요한 핵심 정보와 지식을 제공하는 플랫폼 EDUKET `;
    

    const page=  (
        <>
            <Inside>
                <InsideDiv>
                    <InsidePicture>
                        <img src={inside}/>
                    </InsidePicture>
                    <Section/>
                    <Div>
                        <Title>EDUKET's CHARACTER</Title>
                        <Ul>
                            {character.map((item)=> (
                                <Li>
                                    <ItemDiv>
                                        <Img src={item.image} alt='EDUKET 소개 페이지 대표 이미지'/>
                                        <Name>{item.name}</Name>
                                        <Tag><p>{item.tag}</p></Tag>
                                        <Intro>{item.introduce}</Intro>
                                    </ItemDiv>
                                </Li>
                            ))}
                        </Ul>
                    </Div>
                </InsideDiv>
            </Inside>
        </>
    )
    return(
        <>
            <Common page={page} title={pageTitle} desc={pageDesc} />
        </>
    )
}

const Inside= styled.div`
    background-color: #dae1e6;
`
const InsideDiv= styled.div`
    max-width: 1400px;
    margin: 0 auto;
    overflow-y: scroll;
    scrollbar-width: none;
`
const InsidePicture= styled.div`
        & img {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        border-radius: 10px;
    }
`
const Title= styled.p`
    margin-top: 30px;
    font-family: "Pretendard-600";
    font-size: 2.75rem;
    font-weight: 600;
    text-align: center;
    color: #3a3a3a;
    text-shadow: 2px 2px 0px #90979f;
`
const Div= styled.div`
    margin-top: -20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7.5rem;
    text-align: center;
`
const Ul= styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    margin: 50px 0;
    padding: 0 0;
    box-sizing: border-box;
    line-height: 0;
`
const Li= styled.li`
    flex: 0 0 33.33333%;
    margin: 0 0 50px 0;
    padding: 0 0 0;
    vertical-align: top;
`
const ItemDiv= styled.div`
    height: 700px;
    margin: 0 15px;
    border: 1px solid rgba(0,0,0,0.09);
    background-color: #f1f2f3;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
`
const Img= styled.img`
    width: 100%;
`
const Name= styled.p`
    margin: 30px 0 15px;
    padding: 10px 20px;
    font-family: "Frutiger-lt-pro-600";
    font-size: 25px;
    font-weight: 600;
    color: #3a3a3a;
`
const Tag= styled.div`
    display: inline-block;
    margin: 0 15px 10px;
    padding: 0 10px;
    border-radius: 10px;
    background: #dae1e6;
    font-family: "Frutiger-lt-pro-600";
    font-size: 12px;
    line-height: 30px;
    color: #101010;
    box-shadow: 0 1px 4px rgba(0,0,0,0.5);
`
const Intro= styled.p`
    padding: 0 20px;
    font-family: "Noto_Sans_KR-400";
    font-size: 18px;
    line-height: 35px;
    color: #777;
`