'use client'
import Contact from "@/components/Main/Contato/contact";
import styled from "styled-components";

interface ContatoProps {

}

const Container =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e1e6e3;
`
const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 3rem 0 2rem 0;
`
const Square = styled.div`
    width: 20px;
    height: 20px;
    background-color: #274862;
`

export default function Contato(props : ContatoProps){
    return(
        <Container>
            <Title>
                <Square></Square>
                <h1>Contato</h1>
            </Title>
            <Contact/>
        </Container>
    )
}