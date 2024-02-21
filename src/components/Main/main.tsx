'use client'
import styled from "styled-components"
import Card from "./Card/card"
import Content from "./Content/content"

interface MainProps {

}

const TagMain = styled.main`
    width: 100vw;
    height: 80vh;
    background-color: #274862;

    @media screen and (min-width: 768px){
        height: 77vh;
        width: 50%;
    }

    @media screen and (min-width: 1024px){
        width: 48%;
    }

    @media screen and (min-width: 1440px){
        width: 54%;
    }

    @media screen and (min-width: 1700px){
        width: 65%;
    }
`

export default function Main(props : MainProps){
    return(
        <TagMain>
            <Card/>
            <Content/>
        </TagMain>
    )
}