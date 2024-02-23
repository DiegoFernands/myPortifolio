'use client'
import styled from "styled-components";
import CloseIcon from "./close-icon";

interface NavLinkProps {
    onClose?: () => void;
}


const TagNav = styled.nav`
    width: 100vw;
    height: 140vh;
    display: flex;
    justify-content: center;
    background-color: #e1e6e3;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    padding-top: 12rem;
    overflow: hidden;
`

const ContainerNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`
const TagLink = styled.a`
    font-size: 1.4em;
    color: #274862;
    font-weight: 700;
    text-transform: uppercase;
    &:hover {
        color: #fff;
    }
`

export function removeAccents(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default function NavLink({ onClose}: NavLinkProps){
    const lists = ['Currículo', 'Projetos', 'Contato'];
    return (
        <TagNav>
            <ContainerNav>
                <li><TagLink href="/">Home</TagLink></li>
                {lists.map((list) => (
                    <li key={list}>
                        <TagLink
                        href={`/${removeAccents(list).toLowerCase()}`}>{list}</TagLink>
                    </li>
                ))}
            </ContainerNav>
            {onClose && <CloseIcon onClose={onClose} />}
        </TagNav>
    );
}