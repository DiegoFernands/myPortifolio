import styled from "styled-components"

interface ContentProps {

}

const ContainerContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    @media screen and (min-width: 768px){
        position: relative;
        left: 93%;
        width: 40%;
        top: -1%;
    }
    
    @media screen and (min-width: 1024px){
        width: 30%;
        left: 85%;
    }
    
    @media screen and (min-width: 1440px){
        top: 4%;
        left: 82%;
    }
    @media screen and (min-width: 1700px){
        width: 20%;
        left: 68%;
        top: 5%;
    }
`

const Title = styled.div`
    font-size: large;

    @media screen and (min-width: 768px){
        font-size: 2rem;
    }

    @media screen and (min-width: 1440px){
        font-size: 2rem;
    }
`
const SubTitle = styled.div`
    font-size: medium;

    @media screen and (min-width: 1440px){
        font-size: 1.2rem;
    }
`
const Text = styled.div`
    font-size: 0.9rem;

    @media screen and (min-width: 1440px){
        font-size: 1rem;
    }
`

const ContainerLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    /* margin-top: 1.5rem; */
    &:hover{
        background-color: #274862;
        color: #fff;
        border: none;
    }

    @media screen and (max-width: 600px){
        display: none;
    }
`

const LinkActive = styled(Link)`
    border: none;
    background-color: #274862;
    color: #fff;
    &:hover {
        background-color: transparent;
        color: #000;
        border: 2px solid #274862;
    }
`

export default function Content(props : ContentProps){
    return(
        <ContainerContent>
            <Title>
                <h1>Olá</h1>
            </Title>

            <SubTitle>
                <h3>Esse é meu portifólio e projetos</h3>
            </SubTitle>

            <Text>
                <p>
                    Sou um estudante de Análise e Desenvolvimeto de Sistemas,
                    onde me encontrei na programação e adiquirindo habilidades em tecnologias.
                    Além disso, explorei frameworks poderosos como Angular, React e Next.
                </p>
            </Text>

            <Text>
                <p>
                    Agora, quero compartilhar meu conhecimento e projetos através do meu portfólio.
                </p>
            </Text>
            <ContainerLink>
                <LinkActive href="/curriculo">Currículo</LinkActive>
                <Link href="/projetos">Projetos</Link>
            </ContainerLink>
        </ContainerContent>
    )
}