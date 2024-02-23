'use client'
import IconInstagram from '@/components/Main/Icon-Social/instagram';
import IconLinkedin from '@/components/Main/Icon-Social/linkedin';
import IconGithub from '@/components/Main/Icon-Social/github';
import styled from 'styled-components';


const ContainerFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 100%;
    position: relative;
    z-index: 0;
    `
const ContentFooter = styled.div`
    padding: 1em 0 1em;
    width: 90%;

    @media screen and (min-width: 768px){
        display: flex;
       flex-direction: row;
       justify-content: space-around;
       align-items: center;
    }
`

const DivSocial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 0.6rem;
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
    padding-bottom: 1em;
    @media screen and (min-width: 768px){
        align-items: start;
        flex-direction: column;
    }
`
const Size = styled.div`
    font-size: small;
`

const Bold = styled.p`
    font-weight: 600;
    font-size: 14px;
`


export default function Footer(){
    return(
        <ContainerFooter>
            <ContentFooter>
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
            </ContentFooter>
        </ContainerFooter>
    )
}