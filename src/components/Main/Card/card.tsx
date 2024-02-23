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
    height: 54%;
    position: absolute;
    top: -197px;
    z-index: 0;
    gap: 1em;
`

export default function Card(props : CardProps){
    return(
        <ContainerCard>
            <CardContent/>
            <CardSocial/>
        </ContainerCard>
    )
}