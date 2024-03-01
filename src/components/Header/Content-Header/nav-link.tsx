'use client'
import styled from "styled-components";
import CloseIcon from "./close-icon";

interface NavLinkProps {
    onClose?: () => void;
}


const TagNav = styled.nav`
    display: flex;
    justify-content: center;
    background-color: #e1e6e3;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    padding-top: 12rem;
    width: 100%;
`

const ContainerNav = styled.div`
    height: 100vh;
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

export function backHome(list: string) {
    if(list === 'Home') {
        list = ''
    }
    return removeAccents(list).toLowerCase();
}

export default function NavLink({ onClose}: NavLinkProps){
    const lists = ['Home','Currículo', 'Projetos', 'Contato'];
    return (
        <TagNav>
            <ContainerNav>
                {lists.map((list) => (
                    <li key={list}>
                        <TagLink href={`/${backHome(list)}`}>
                            {list}
                        </TagLink>
                    </li>
                ))}
            </ContainerNav>
            {onClose && <CloseIcon onClose={onClose} />}
        </TagNav>
    );
}