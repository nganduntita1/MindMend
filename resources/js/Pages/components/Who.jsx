import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;

`;

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1200px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
// background: #000;

  
`;

const Right = styled.div`
flex: 3;
// background: #fff;
display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 60%;
  margin-top: 150px;
  padding: 20px;
/* From https://css.glass */
background: rgba(255, 255, 255, 0.06);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.8px);
-webkit-backdrop-filter: blur(6.8px);
border: 1px solid rgba(255, 255, 255, 0.85);

  
`;
const Title = styled.h1`
  font-size: 25px

`;
const WhatWeDo = styled.div`

`;
const Line = styled.div`

`;
const Subtitle = styled.h2`


`;
const Desc = styled.p`

`;
const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: #5221dd;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin: 0 auto;
`;
const Img = styled.img`
z-index: 100;`;

const Img2 = styled.svg`

`;

const Who = () => {
  return (
    <Section>
        <Container>
            <Left>
               <Img src="./img/ai5.png" />
            </Left>
            <Right className='bg-white'>
                <Title className="font-montserrat font-bold ">Hi! I Am Nova This Is How I Can Help You:</Title>
                
                <Desc className='text-gray-700'>Personalized Learning Paths: Our AI-powered system assesses each child’s strengths and areas for improvement, creating a customized learning plan that grows with them.</Desc>
                <Desc className='text-gray-700'>Interactive Lessons: Engaging and interactive lessons keep kids motivated and eager to learn. From fun quizzes to hands-on activities, we make sure learning never feels like a chore.</Desc>
                <Desc className='text-gray-700'>AI-Driven Insights: Our AI analyzes performance data to offer tailored recommendations, ensuring that your child is always on the right track.</Desc>
                <Desc className='text-gray-700'>Safe and Supportive Environment: We prioritize safety and encourage a supportive community where kids can ask questions, explore new topics, and share their achievements.</Desc>
                
                <Button>Get Started</Button>
            </Right>
            
        </Container>
    </Section>
  )
}

export default Who