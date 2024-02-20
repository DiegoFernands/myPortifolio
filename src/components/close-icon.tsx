import styled from "styled-components"

interface CloseIconProps {
    onClose?: () => void;
}

const CloseBtn =  styled.button`
    position: absolute;
    top: 25px;
    right: 20px;
`
export function CloseIcon(props : CloseIconProps){
    return(
        <CloseBtn onClick={props.onClose}>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Menu / Close_MD">
                    <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
        </CloseBtn>
    )
}