'use client'
import styled from "styled-components"
import Card from "../components/Main/Card/card"
import Content from "../components/Main/Content/content"

const TagMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #274862;
  position: relative;
  height: 750px;
  top: 200px;
  width: 100%;

  @media screen and (min-width: 768px){
    flex-direction: row;
    top: 0;
    right: 70%;
    height: 900px;
  }

  @media screen and (min-width: 1024px){
    right: 60%;
  }
`

export default function Home(){
  return(
    <TagMain>
      <Card/>
      <Content/>
    </TagMain>
  )
}
