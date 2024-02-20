'use client'
import styled, { keyframes } from "styled-components";
import { CloseIcon } from "./close-icon";


interface NavLinkProps {
    onClose?: () => void;
}


const TagNav = styled.nav<{ isVisible?: boolean }>`
    width: 100vw;
    height: 100vh;
    background-color: #a9a9a9;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContainerNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
`
const TagLink = styled.a`
    font-size: 20px;
    &:hover {
        color: #fff;
    }
`

export function NavLink({ onClose}: NavLinkProps){
    const lists = ['Sobre mim', 'Currículo', 'Projetos', 'Contato'];
    
    return (
        <TagNav>
            <ContainerNav>
                {lists.map((list) => (
                    <li key={list}>
                        <TagLink href="#">{list}</TagLink>
                    </li>
                ))}
            </ContainerNav>
            {onClose && <CloseIcon onClose={onClose} />}
        </TagNav>
    );
}