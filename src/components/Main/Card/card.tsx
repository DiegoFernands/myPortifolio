import styled from "styled-components"
import CardContent from './card-content';
import CardButton from "./card-button";
import CardSocial from "./card-social";

interface CardProps {

}

const ContainerCard = styled.div`
    width: 335px;
    height: 55vh;
    background-color: #e1e6e3;
    position: absolute;
    top: -190px;
    right: 5%;
    box-shadow: -6px 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    @media screen and (max-width: 320px){
        right: 0;
    }

    @media screen and (min-width: 400px){
        width: 340px;
        right: 9%;
    }

    @media screen and (min-width: 425px){
        right: 10%;
    }

    @media screen and (min-width: 768px){
        top: 100px;
        left: 70px;
        height: 55%;
    }

    @media screen and (min-width: 1024px){
        left: 165px;
    }

    @media screen and (min-width: 1440px){
        left: 360px;
    }

    @media screen and (min-width: 1700px){
        width: 400px;
        height: 53vh;
        left: 450px;
    }

    @media screen and (min-width: 1800px){
        width: 400px;
        height: 53vh;
        left: 590px;
    }
`

export default function Card(props : CardProps){
    return(
        <ContainerCard>
            <CardContent/>
            <CardButton/>
            <CardSocial/>
        </ContainerCard>
    )
}