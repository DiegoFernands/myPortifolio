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
    width: 100%;
    height: 2px;
`
const Name = styled.h3`
    font-size: 1.4rem;
    width: 53%;
    text-align: center;
    white-space: pre-wrap;
    
`
export default function CardContent(props : CardContentProps){
    return(
        <TagDiv>
            <Img src="/diego.jpg" alt="Foto de Perfil" />
            <Name>Diego Oliveira</Name>
            <Border></Border>
        </TagDiv>
    )
}