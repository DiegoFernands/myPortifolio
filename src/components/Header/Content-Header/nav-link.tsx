'use client'
import styled from "styled-components";
import CloseIcon from "./close-icon";
import { useEffect, useState } from "react";

interface NavLinkProps {
    onClose?: () => void;
}

interface LinkProps {
    selected: boolean;
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
const TagLink = styled.a<LinkProps>`
    font-size: 1.4em;
    color: ${(props) => (props.selected ? "#274862" : "#0505059d")};
    border-bottom: ${(props) => (props.selected ? "2px solid #274862" : "none")};
    font-weight: 700;
    text-transform: uppercase;
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
    const [selectedLink, setSelectedLink] = useState("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const lists = ['Home', 'Currículo', 'Projetos', 'Contato'];
    useEffect(() => {
        const pathname = window.location.pathname;
        const currentLink = lists.find(
          (list) => `/${backHome(list)}` === pathname
        );
        if (currentLink) {
          setSelectedLink(currentLink);
        }
      }, [lists]);
    return (
        <TagNav>
            <ContainerNav>
                {lists.map((list) => (
                    <li key={list}>
                        <TagLink
                        selected={list === selectedLink}
                        href={`/${backHome(list)}`}>{list}</TagLink>
                    </li>
                ))}
            </ContainerNav>
            {onClose && <CloseIcon onClose={onClose} />}
        </TagNav>
    );
}