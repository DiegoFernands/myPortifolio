import styled from "styled-components"
import { removeAccents } from './nav-link';

interface ListMenuProps {

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

const Link = styled.a`
    text-transform: uppercase;
    font-size: 14px;
    &:hover {
        border-bottom: 2px solid #274862;
    }
    `

const LinkMain = styled.a`
    color: #274862;
    font-weight: 600;
    border-bottom: 2px solid #274862;
`

export default function ListMenu(props : ListMenuProps){
    const lists = ['Currículo', 'Projetos', 'Contato'];
    return(
        <TagUl>
            <li><LinkMain href="/">Home</LinkMain></li>
            {lists.map((list) => (
                <li key={list}><Link href={removeAccents(list).toLowerCase()}>{list}</Link></li>
            ))}
        </TagUl>
    )
}