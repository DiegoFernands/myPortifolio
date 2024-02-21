import IconInstagram from '@/components/Main/Icon-Social/instagram';
import IconLinkedin from './../../Main/Icon-Social/linkedin';
import IconGithub from '@/components/Main/Icon-Social/github';
import styled from 'styled-components';

interface SocialInfoProps {}

const ContainerInfo = styled.div`
    padding: 0 32px 20px;
`

const DivSocial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 0.4rem;
    }
`

const DivIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const DivInfo = styled.div`
    font-size: small;
`

export default function SocialInfo(props : SocialInfoProps){
    return(
        <ContainerInfo>
            <DivSocial>
                <p>Redes sociais</p>
                <DivIcon>
                    <IconLinkedin/>
                    <IconInstagram/>
                    <IconGithub/>
                </DivIcon>
            </DivSocial>
            <DivInfo>
                <p>Política de Cookies</p>
                <p>Política de Privacidade</p>
                <p>© 2035 por Diego Oliveira</p>
            </DivInfo>
        </ContainerInfo>
    )
}