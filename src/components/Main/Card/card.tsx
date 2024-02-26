import styled from "styled-components"
import CardContent from './card-content';
import CardSocial from "./card-social";

interface CardProps {

}

const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #e1e6e3;
    box-shadow: -6px 4px 10px rgba(0, 0, 0, 0.3);
    width: 90%;
    height: 52.5%;
    position: absolute;
    top: -197px;
    z-index: 0;
    gap: 1em;

    @media screen and (min-width: 768px){
        width: 40%;
        top: 30%;
        left: 80%;
        height: 41%;
    }
    
    @media screen and (min-width: 1024px){
        width: 35%;
        left: 82.5%;
    }
    
    @media screen and (min-width: 1440px){
        height: 52%;
        width: 30%;
        left: 85%;
    }

    @media screen and (min-width: 1700px){
        width: 20%;
        left: 87%;
        height: 52%;
    }
`

export default function Card(props : CardProps){
    return(
        <ContainerCard>
            <CardContent/>
            <CardSocial/>
        </ContainerCard>
    )
}