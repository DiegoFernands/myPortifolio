import styled from "styled-components"

interface InfoProps {

}

const TagDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    @media screen and (min-width: 412px){
        padding: 30px;
    }

`
const Size = styled.div`
    font-size: small;
`

const Bold = styled.p`
    font-weight: 600;
    font-size: 14px;
`

export default function Info(props : InfoProps){
    return(
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
    )
}