import styled from "styled-components"
import { backHome, removeAccents } from './nav-link';
import { useEffect, useState } from "react";

interface LinkProps {
    selected: boolean;
}
const TagUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    @media screen and (max-width: 600px){
        display: none;
    }
`

const LinkMain = styled.a<LinkProps>`
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  color: ${(props) => (props.selected ? "#274862" : "#000")};
  border-bottom: ${(props) => (props.selected ? "2px solid #274862" : "none")};
  &:hover {
        border-bottom: 2px solid #274862;
    }
`

export default function ListMenu() {
    const lists = ["Home", "Currículo", "Projetos", "Contato"];
    const [selectedLink, setSelectedLink] = useState("");
    useEffect(() => {
        const pathname = window.location.pathname;
        const currentLink = lists.find(
          (list) => `/${backHome(list)}` === pathname
        );
        if (currentLink) {
          setSelectedLink(currentLink);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      return (
        <TagUl>
          {lists.map((list) => (
              <li key={list}>
                <LinkMain 
                    selected={list === selectedLink}
                    href={`/${backHome(list)}`}>
                    {list}
                </LinkMain>
            </li>
          ))}
        </TagUl>
      );
    }
    // test