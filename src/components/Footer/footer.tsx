import SocialInfo from "./ContentFooter/social-info"

interface FooterProps {

}

export default function Footer(props : FooterProps){
    return(
        <div style={{
            width: '100vw'
        }}>
            <SocialInfo/>
        </div>
    )
}