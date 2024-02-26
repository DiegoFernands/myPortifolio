import styled from "styled-components"

interface CardButtonProps {
}

const ContainerBtn = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
`
export const LinkBtn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    width: 8em;
    height: 2em;
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: 600;
    &:hover{
        background-color: #274862;
        color: #fff;
        border: none;
    }

    @media screen and (min-width: 768px){
        display: none;
    }
`
const LinkActive = styled(LinkBtn)`
    border: none;
    background-color: #274862;
    color: #fff;
`

export default function CardButton(props : CardButtonProps){
    return(
        <ContainerBtn>
            <LinkActive href="/curriculo">Currículo</LinkActive>
            <LinkBtn href="/projetos">Projetos</LinkBtn>
        </ContainerBtn>
    )
}