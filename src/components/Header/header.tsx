'use client'
import styled from "styled-components"
import MenuIcon from "./Content-Header/menu-icon"
import ListMenu from './Content-Header/link-menu';
import { useState } from "react";
import NavLink from "./Content-Header/nav-link";
import CloseIcon from "./Content-Header/close-icon";

interface HeaderProps {
    
}

const TagHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    position: relative;
    z-index: 0;
    margin-bottom: 12rem;

    @media screen and (min-width: 768px){
        margin-bottom: 0;
    }
    @media screen and (min-width: 1024px){
        padding: 25px 70px;
    }
    
    @media screen and (min-width: 1440px){
        padding: 30px 220px;
    }
`

const Logo = styled.a`
    font-size: 20px;
    font-weight: 500;
`

const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 769px){
        flex-direction: row;
        gap: 1rem;
    }
`
const LogoContent = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
`

const Square = styled.div`
    width: 15px;
    height: 15px;
    background-color: #0000ff;
`

const TagP = styled.p`
    letter-spacing: 0.2em;
`

export function Header(props: HeaderProps) {
    const [isNavVisible, setIsNavVisible] = useState(false);

    function handleMenuToggle() {
        setIsNavVisible(!isNavVisible);
    }

    return (
        <TagHeader>
            <ContainerHeader>
                <LogoContent>
                    <Square />
                    <Logo href="/">Diego Oliveira</Logo>
                </LogoContent>
                <TagP>Front-end Developer</TagP>
            </ContainerHeader>
            <MenuIcon onMenuToggle={handleMenuToggle} />
            {isNavVisible && <CloseIcon onClose={handleMenuToggle} />}
            {isNavVisible && <NavLink onClose={handleMenuToggle} />}
            <ListMenu/>
        </TagHeader>
    );
};