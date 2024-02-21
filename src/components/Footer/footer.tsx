import styled from "styled-components"
import Info from "./ContentFooter/info"
import SocialInfo from "./ContentFooter/social-info"

interface FooterProps {

}

export default function Footer(props : FooterProps){
    return(
        <div>
            <Info/>
            <SocialInfo/>
        </div>
    )
}