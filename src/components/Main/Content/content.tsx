import styled from "styled-components"

interface ContentProps {

}

const ContainerContent = styled.div`
    position: absolute;
    top: 36%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 22px;
    
    @media screen and (min-width: 412px){
        padding: 0 35px;
    }
`

const Title = styled.div`
    font-size: large;
`
const SubTitle = styled.div`
    font-size: medium;
`
const Text = styled.div`
    font-size: 0.9rem;
`
export default function Content(props : ContentProps){
    return(
        <ContainerContent>
            <Title>
                <h1>Olá</h1>
            </Title>

            <SubTitle>
                <h3>Meu perfil e meus projetos</h3>
            </SubTitle>

            <Text>
                <p>Sou um parágrafo. Aqui você pode adicionar seu texto. 
                    É fácil, basta clicar ou 
                    clicar duas vezes sobre mim para editar o conteúdo, 
                    a fonte e mais.
                </p>
            </Text>

            <Text>
                <p>
                    Sou um ótimo lugar para você contar a sua história e compartilhar sobre você.
                </p>
            </Text>
        </ContainerContent>
    )
}