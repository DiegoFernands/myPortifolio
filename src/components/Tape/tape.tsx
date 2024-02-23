'use client'
import styled from "styled-components"

const TagFooter = styled.footer`
    width: 100%;
    height: 100px;
    background-color: #e1e6e3;
    position: fixed;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
    display: none;
    @media screen and (min-width: 768px){
        display: block;
    }
`
export default function Tape(){
    return(
        <TagFooter></TagFooter>
    )
}