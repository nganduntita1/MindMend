import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial  } from "@react-three/drei"


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
justify-content: space-between;
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
const Title = styled.h1`
font-size: 41px;
  


`;
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const Line = styled.img`
height: 30px;
`;
const Subtitle = styled.h2`
// text-transform: uppercase;
//   background-image: linear-gradient(
//     -225deg,
//     #0C3E71 0%,
//     #0C3E71 29%,
//     #fff 67%,
//     #fff 100%
//   );
//   background-size: auto auto;
//   background-clip: border-box;
//   background-size: 200% auto;
//   color: #fff;
//   background-clip: text;
//   text-fill-color: transparent;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   animation: textclip 2s linear infinite;
//   display: inline-block;
//       font-size: 19px;

//       @keyframes textclip {
//   to {
//     background-position: 200% center;
//   }
// }
color: #000;
font-size: 25px;



`;
const Desc = styled.p`
font-size: 16px;
color: #000;


`;
const DescBG = styled.div`
padding: 10px;
/* From https://css.glass */
background: rgba(255, 255, 255, 0.06);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.8px);
-webkit-backdrop-filter: blur(6.8px);
border: 1px solid rgba(255, 255, 255, 0.85);

`;
const Button = styled.button`
width: 100px;
  padding: 10px;
  background-color: #5221dd;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;


const Right = styled.div`
flex: 3;
// background: #fff;
position: relative;
`;
const Img = styled.img`
height: 560px;
width: 550px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: 0 auto;
animation: animate 2s infinite ease alternate;

@keyframes animate {
    to{
        transform: translateY(20px);
    }
}
`;

const Hero = () => {
  return (
    <Section>
        <Navbar />
        <Container>
            <Left>
                <Title className="font-montserrat font-bold ">A Smarter Way to Study</Title>
                <WhatWeDo>
                    <Line src="./img/books-emoji.png" />
                    <Subtitle className="text-xl font-poppins font-semibold text-gray-700">Where Learning Meets Fun</Subtitle>
                </WhatWeDo>
                <DescBG>
                <Desc className='text-gray-700'>Say goodbye to boring study routines. With MindMend, learning is always an adventure</Desc>
                </DescBG>
                <Button>Start Now</Button>
            </Left>
            <Right>
                {/* 3d model */}
                <Canvas camera={{ fov: 25, position: [3, 4, 5] }}>
                    <OrbitControls enableZoom={false} autoRotate />
                    <ambientLight intensity={2} />
                    <directionalLight  position={[3, 4, 5]} intensity={1.5}/>
                    <Sphere args={[1,100,200]} scale={1.2} >
                        <MeshDistortMaterial color="#0C3E71" attach="material" distort={0.5} speed={2} />
                    </Sphere>
                </Canvas>
                <Img src="./img/float22.png" />
            </Right>
        </Container>
    </Section>
  )
}

export default Hero