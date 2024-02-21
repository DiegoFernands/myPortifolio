import styled from "styled-components"
import CardContent from './card-content';
import CardButton from "./card-button";
import CardSocial from "./card-social";

interface CardProps {

}

const ContainerCard = styled.div`
    width: 335px;
    height: 50vh;
    background-color: #e1e6e3;
    position: absolute;
    top: -190px;
    right: 5%;
    box-shadow: -6px 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    @media screen and (min-width: 425px){
        right: 10%;
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