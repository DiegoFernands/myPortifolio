
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 90%;
    margin-bottom: 2rem;
    box-shadow: -6px 4px 10px rgba(0, 0, 0, 0.3);
    @media screen and (min-width: 768px){
        margin-top: 5rem;
        width: 60%;
    }

    @media screen and (min-width: 1024px){
        width: 50%;
    }
`

const Form = styled.div`
    display: flex;
    margin: 1rem;
    gap: 1rem;
    flex-direction: column;
    width: 100%;
`
const DivName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const DivLink = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`

const Link = styled.a`
    height: 32px;
    width: 130px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 1.5rem;
    background-color: #274862;
    color: #fff;
`


export default function Contact(){
    return(
        <Container>
            <Form>
                <DivName>
                    <div>
                        <label>Nome</label>
                        <input type="text" name="Nome"/>
                    </div>
                    <div>
                        <label>Sobrenome</label>
                        <input type="text" name="Sobrenome"/>
                    </div>
                </DivName>
                <div>
                    <label>Email</label>
                    <input type="email" name="Email"/>
                </div>
                <div>
                    <label>Assunto</label>
                    <input type="text" name="Assunto"/>
                </div>
                <div>
                    <label>Mensagem</label>
                    <input type="text" name="Mensagem"/>
                </div>
                <DivLink>
                    <Link href="#">Enviar</Link>
                </DivLink>
            </Form>
        </Container>
    )
}