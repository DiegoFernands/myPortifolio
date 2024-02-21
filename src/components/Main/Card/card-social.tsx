import styled from "styled-components";
import IconInstagram from "../Icon-Social/instagram";
import IconLinkedin from "../Icon-Social/linkedin";
import IconGithub from "../Icon-Social/github";

interface CardSocialProps {

}

const ContainerSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #fff;
    gap: 1rem;
    padding-top: .4em;
`

export default function CardSocial(props : CardSocialProps){
    return(
        <ContainerSocial>
            <IconLinkedin/>
            <IconInstagram/>
            <IconGithub/>
        </ContainerSocial>
    )
}