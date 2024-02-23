import styled from "styled-components"

interface ContentProps {

}

const ContainerContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
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

const ContainerLink = styled.div`
    display: flex;
    gap: 20px;
`
const Link = styled.a`
    border: 1px solid #000;
    height: 32px;
    width: 130px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 1.5rem;
    &:hover{
        background-color: #274862;
        color: #fff;
        border: none;
    }

    @media screen and (max-width: 600px){
        display: none;
    }
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
            <ContainerLink>
                <Link href="#">Currículo</Link>
                <Link href="#">Projetos</Link>
            </ContainerLink>
        </ContainerContent>
    )
}