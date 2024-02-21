'use client'
import styled from "styled-components"
import Card from "./Card/card"
import Content from "./Content/content"

interface MainProps {

}

const TagMain = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #274862;
`

export default function Main(props : MainProps){
    return(
        <TagMain>
            <Card/>
            <Content/>
        </TagMain>
    )
}