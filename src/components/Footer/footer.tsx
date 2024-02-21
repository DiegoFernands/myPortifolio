import styled from "styled-components"
import Info from "./ContentFooter/info"
import SocialInfo from "./ContentFooter/social-info"

interface FooterProps {

}

const ContainerFooter = styled.div`

`
export default function Footer(props : FooterProps){
    return(
        <ContainerFooter>
            <Info/>
            <SocialInfo/>
        </ContainerFooter>
    )
}