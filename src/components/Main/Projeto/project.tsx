import styled from "styled-components"
import ProjectCard from "./projectCard"

interface ProjectProps {

}
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-top: 1rem;
    @media screen and (min-width: 768px){
        padding-top: 110px;
    }
    `

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    text-align: center;
    padding-bottom: 3rem;
    p {
        font-size: 0.9rem;
        line-height: 1.5;
    }
    @media screen and (min-width: 768px){
        width: 50%;
    }
`
const ContentTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 2rem 0 1rem 0;
`

const Square = styled.div`
    width: 20px;
    height: 20px;
    background-color: #274862;
`
export default function Project(props : ProjectProps){
    return(
        <Container>
            <Content>
                <ContentTitle>
                    <Square></Square>
                    <h1>Projetos</h1>
                </ContentTitle>
                <p>Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em 
                    Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo 
                    lugar para você compartilhar a sua história.
                </p>
            </Content>
            <ProjectCard/>
        </Container>
    )
}