'use client'
import styled from "styled-components"
import MenuIcon from "./menu-icon"
import { ListMenu } from './link-menu';
import { useState } from "react";
import { NavLink } from "./nav-link";
import { CloseIcon } from "./close-icon";

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    position: relative;
    z-index: 0;
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
                    <Logo>Diego Oliveira</Logo>
                </LogoContent>
                <TagP>Developer Front-end</TagP>
            </ContainerHeader>
            <MenuIcon onMenuToggle={handleMenuToggle} />
            {isNavVisible && <CloseIcon onClose={handleMenuToggle} />}
            {isNavVisible && <NavLink onClose={handleMenuToggle} />}
            <ListMenu/>
        </TagHeader>
    );
};