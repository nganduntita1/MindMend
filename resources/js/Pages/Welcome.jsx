import { Link, Head } from "@inertiajs/react";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Who from "./components/Who";
import { styled } from "styled-components";

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: auto;
    overflow-y: auto;
    background: url("./img/7.jpg") no-repeat center center;
    background-size: cover; /* Or use 'contain' */
    scrollbar-width: none;
    
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

export default function Welcome({ auth }) {
  return (
    <>
      <Head title="Welcome" />
        <Container>
          <Hero />
          <Who />
        </Container>

        {/* <footer className="py-16 text-center text-sm text-black dark:text-white/70"></footer> */}
    </>
  );
}
