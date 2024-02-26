import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`
const ContainerContent = styled.div`
    width: 90%;
    background-color: #fff;
`
const Content =  styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`

const Emphasis = styled.p`
    color: #274862;
    font-weight: 600;
`

export default function Experience(){
    return(
        <Container>
            <ContainerContent>
                <Content>
                    <Emphasis>2035 - Atual</Emphasis>
                    <p>CARGO</p>
                    <div>
                        <p>Nome da empresa</p>
                        <p>Localização da empresa</p>
                    </div>
                    <p>Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais.</p>
                    <p>Sou um ótimo lugar para você contar a sua história e compartilhar sobre você.</p>
                </Content>
            </ContainerContent>
            <ContainerContent>
                <Content>
                    <Emphasis>2035 - Atual</Emphasis>
                    <p>CARGO</p>
                    <div>
                        <p>Nome da empresa</p>
                        <p>Localização da empresa</p>
                    </div>
                    <p>Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais.</p>
                    <p>Sou um ótimo lugar para você contar a sua história e compartilhar sobre você.</p>
                </Content>
            </ContainerContent>
            <ContainerContent>
                <Content>
                    <Emphasis>2035 - Atual</Emphasis>
                    <p>CARGO</p>
                    <div>
                        <p>Nome da empresa</p>
                        <p>Localização da empresa</p>
                    </div>
                    <p>Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais.</p>
                    <p>Sou um ótimo lugar para você contar a sua história e compartilhar sobre você.</p>
                </Content>
            </ContainerContent>
             
        </Container>
       
    )
}