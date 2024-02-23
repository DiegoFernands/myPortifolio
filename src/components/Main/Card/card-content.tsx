import styled from "styled-components"
import CardButton from './card-button';

interface CardContentProps {

}

const TagDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top: 1em;
`
const Img = styled.img`
    width: 10em;
    height: 10em;
    border-radius: 50%;
    object-fit: cover;
`

const Border = styled.div`
    background-color: #274862;
    width: 100px;
    height: 2px;
`
const Name = styled.h3`
    font-size: 1.4rem;
    width: 53%;
    text-align: center;
    white-space: pre-wrap;
`
const TagPDesk = styled.p`
    display: none;
    letter-spacing: 0.2em;

    @media screen and (min-width: 768px){
        display: block;
    }
`
export default function CardContent(props : CardContentProps){
    return(
        <TagDiv>
            <Img src="/diego.jpg" alt="Foto de Perfil" />
            <Name>Diego Oliveira</Name>
            <Border></Border>
            <TagPDesk>Front-end Developer</TagPDesk>
            <CardButton/>
        </TagDiv>
    )
}