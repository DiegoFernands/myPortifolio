import { useState } from "react";
import styled from "styled-components"

interface MenuIconProps {
    onMenuToggle: () => void;
}

const TagBtn = styled.button`
    @media screen and (min-width: 600px){
        display: none;
    }
`
export default function MenuIcon(props : MenuIconProps){
    const [isNavVisible, setIsNavVisible] = useState(false);

    function handleMenuToggle() {
        setIsNavVisible(!isNavVisible);
        props.onMenuToggle();
    };

    return(
        <TagBtn onClick={handleMenuToggle}> 
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Menu / Menu_Alt_05">
                    <path id="Vector" d="M5 17H13M5 12H19M11 7H19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* Ficar atento as variaveis camelcase não pode ser exemplo-exemplo o correto é exemploExemplo */}
                </g>
            </svg>
        </TagBtn>
    )
}
