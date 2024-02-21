import styled from "styled-components"

interface CardButtonProps {

}

const ContainerBtn = styled.div`
    display: flex;
    gap: 20px;
`
const LinkBtn = styled.a`
    border: 1px solid #000;
    height: 32px;
    width: 130px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;
    &:hover{
        background-color: #274862;
        color: #fff;
        border: none;
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