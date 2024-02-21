import IconInstagram from '@/components/Main/Icon-Social/instagram';
import IconLinkedin from './../../Main/Icon-Social/linkedin';
import IconGithub from '@/components/Main/Icon-Social/github';
import styled from 'styled-components';

interface SocialInfoProps {}

const ContainerInfo = styled.div`
    padding: 20px 32px 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 768px){
        flex-direction: row;
        gap: 3rem;
    }

    @media screen and (min-width: 1024px){
        margin-left: 125px;
    }

    @media screen and (min-width: 1440px){
        margin-left: 290px;
    }

    @media screen and (min-width: 1700px){
        margin-left: 570px;
    }
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
const TagDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (min-width: 768px){
        gap: 20px;
    }
`
const Size = styled.div`
    font-size: small;
`

const Bold = styled.p`
    font-weight: 600;
    font-size: 14px;
`


export default function SocialInfo(props : SocialInfoProps){
    return(
        <ContainerInfo>
            <TagDiv>
                <Size>
                    <Bold>Telefone</Bold>
                    <p>(19)9993195389</p>
                </Size>
                <Size>
                    <Bold>Email</Bold>
                    <p>diego.fernandesjs@gmail.com</p>
                </Size>
            </TagDiv>
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
                <p>© 2024 por Diego Oliveira</p>
            </DivInfo>
        </ContainerInfo>
    )
}