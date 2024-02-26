'use client'
import { LinkBtn } from "@/components/Main/Card/card-button"
import Training from "@/components/Main/curriculo/Training"
import Experience from "@/components/Main/curriculo/experience"
import Skills from "@/components/Main/curriculo/skills"
import styled from "styled-components"

interface CurriculoProps {

}

const Div = styled.div`
    height: 100%;
    width: 100%;
    background-color: #e1e6e3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
    @media screen and (min-width: 768px){
        position: relative;
    }
`
const Square = styled.div`
    width: 20px;
    height: 20px;
    background-color: #274862;
`

const TagDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 2rem;
`

const ContentLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
`

const Container = styled.div`
    width: 90%;
`

const LinkActive = styled(LinkBtn)`
    border: none;
    background-color: #274862;
    color: #fff;
`
const Midle =  styled.div`
    display: flex;
    width: 90%;
    padding: 2rem 0 2rem 0;
`

export default function Curriculo(props : CurriculoProps){
    return(
        <Div>
            <Container>
                <TagDiv>
                    <Square></Square>
                    <h1>Currículo</h1>
                </TagDiv>
                <ContentLink>
                    <h3>Experiência</h3>
                    <LinkActive href="#">Baixar cv</LinkActive>
                </ContentLink>
            </Container>
            <Experience/>
            <Midle>
                <h3>Formação</h3>
            </Midle>
            <Training/>
            <Skills/>
        </Div>
    )
}