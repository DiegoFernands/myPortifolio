'use client'
import Footer from "@/components/Footer/footer";
import Main from "@/components/Main/main";
import styled from "styled-components";


const Container = styled.div`
  position: absolute;
  z-index: -1;
`
export default function Home() {
  return (
    <Container>
      <Main/>
      <Footer/>
    </Container>
  );
}
