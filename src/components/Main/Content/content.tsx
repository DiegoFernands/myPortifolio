import styled from "styled-components"
import CardButton from './../Card/card-button';

interface ContentProps {

}

const ContainerContent = styled.div`
    position: absolute;
    top: 37%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 22px;

    @media screen and (min-width: 412px){
        padding: 0 35px;
    }

    @media screen and (min-width: 768px){
        top: 75px;
        left: 407px;
        width: 52%;
    }

    @media screen and (min-width: 1024px){
        left: 545px;
        width: 35%;
    }

    @media screen and (min-width: 1440px){
        width: 40%;
        left: 745px;
    }

    @media screen and (min-width: 1700px){
        width: 43%;
        top: 65px;
        left: 980px;
    }
`

const Title = styled.div`
    font-size: large;
    @media screen and (min-width: 768px){
        font-size: 35px;
    }

    @media screen and (min-width: 1700px){
        font-size: 50px;
    }
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