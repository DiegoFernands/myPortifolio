import Image from 'next/image';
import styled from "styled-components"

interface CardContentProps {

}

const TagDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
`
const Img = styled.img`
    width: 150px;
    height: 150px;
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

    @media screen and (min-width: 1024px){
       font-size: 1.6rem;
    }    
`
const TagPDesk = styled.p`
    display: none;
    @media screen and (min-width: 600px){
        display: block;
        font-size: 18px;
        letter-spacing: 0.2rem;
    }

    @media screen and (min-width: 1024px){
       margin-top: 5px;
    }

    @media screen and (min-width: 1440px){
       margin-top: 10px;
    }

    @media screen and (min-width: 1700px){
       margin-top: 20px;
    }
`
export default function CardContent(props : CardContentProps){
    return(
        <TagDiv>
            <Img src="/diego.jpg" alt="Foto de Perfil" />
            <Name>Diego Oliveira</Name>
            <Border></Border>
            <TagPDesk>Front-end Developer</TagPDesk>
        </TagDiv>
    )
}