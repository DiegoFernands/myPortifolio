import styled from "styled-components"

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
        border-bottom: 2px solid #000000;
    }
`
export function ListMenu(props : ListMenuProps){
    const lists = ['Sobre mim', 'Currículo', 'Projetos', 'Contato'];
    return(
        <TagUl>
            {lists.map((list) => (
                <li key={list}><Link href="#">{list}</Link></li>
            ))}
        </TagUl>
    )
}