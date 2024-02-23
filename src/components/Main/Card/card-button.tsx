import styled from "styled-components"

interface CardButtonProps {
}

const ContainerBtn = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    padding-top: 10px;
`
const LinkBtn = styled.a`
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

export default function CardButton(props : CardButtonProps){
    return(
        <ContainerBtn>
            <LinkBtn href="#">Currículo</LinkBtn>
            <LinkBtn href="#">Projetos</LinkBtn>
        </ContainerBtn>
    )
}