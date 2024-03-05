import styled from "styled-components";

interface ProjectCardProps {}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  justify-content: center;
  margin-bottom: 1rem;
`
const DivTest = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  background-color: #fff;
  overflow: hidden;
  box-shadow: -6px 4px 10px rgba(0, 0, 0, 0.3);
  @media screen and (min-width: 768px){
    width: 671px;
    height: 350px;
    flex-direction: row;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-top: 1rem;
  @media screen and (min-width: 768px){
    width: 200%;
  }
`
const Text = styled.div`
  width: 90%;
  padding: 20px;
  margin-left: 1rem;
  p {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 768px){
    p{
      font-size: 1rem;
    }
  }

`

const TitleProject = styled.div`
  border-left: 0.7rem solid #274862;
  background-color: #fff;
  width: 90%;
`

const Div = styled.div`
  padding-top: 1rem;
  margin-left: 1.6rem;
  h3 {
    color: #274862;
  }
  p {
    font-size: 0.75rem;
    font-weight: 600;
  }
  @media screen and (min-width: 768px){
    margin-left: 1.6rem;
    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9;
    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  @media screen and (min-width: 768px){
    width: 200%;
    height: 500px;
  }
`



export default function ProjectCard(props: ProjectCardProps) {
  return (
    <CardContainer>
      <DivTest>
        <Content>
          <TitleProject>
            <Div>
              <h3>Nome do projeto 01</h3>
              <p>Função</p>
            </Div>
          </TitleProject>
          <Text>
            <p>
              Sou um parágrafo. Aqui você pode adicionar e editar seu próprio
              texto. É fácil, basta clicar em Editar texto ou clicar duas vezes
              sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo
              lugar para você compartilhar a sua história.
            </p>
          </Text>
        </Content>
        <ImageContainer>
          <Image src="/image.png" alt="Imagem do Projeto" />
        </ImageContainer>
      </DivTest>

      <DivTest>
        <Content>
          <TitleProject>
            <Div>
              <h3>Nome do projeto 01</h3>
              <p>Função</p>
            </Div>
          </TitleProject>
          <Text>
            <p>
              Sou um parágrafo. Aqui você pode adicionar e editar seu próprio
              texto. É fácil, basta clicar em Editar texto ou clicar duas vezes
              sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo
              lugar para você compartilhar a sua história.
            </p>
          </Text>
        </Content>
        <ImageContainer>
          <Image src="/image.png" alt="Imagem do Projeto" />
        </ImageContainer>
      </DivTest>

      <DivTest>
        <Content>
          <TitleProject>
            <Div>
              <h3>Nome do projeto 01</h3>
              <p>Função</p>
            </Div>
          </TitleProject>
          <Text>
            <p>
              Sou um parágrafo. Aqui você pode adicionar e editar seu próprio
              texto. É fácil, basta clicar em Editar texto ou clicar duas vezes
              sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo
              lugar para você compartilhar a sua história.
            </p>
          </Text>
        </Content>
        <ImageContainer>
          <Image src="/image.png" alt="Imagem do Projeto" />
        </ImageContainer>
      </DivTest>

      <DivTest>
        <Content>
          <TitleProject>
            <Div>
              <h3>Nome do projeto 01</h3>
              <p>Função</p>
            </Div>
          </TitleProject>
          <Text>
            <p>
              Sou um parágrafo. Aqui você pode adicionar e editar seu próprio
              texto. É fácil, basta clicar em Editar texto ou clicar duas vezes
              sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo
              lugar para você compartilhar a sua história.
            </p>
          </Text>
        </Content>
        <ImageContainer>
          <Image src="/image.png" alt="Imagem do Projeto" />
        </ImageContainer>
      </DivTest>
    </CardContainer>
  );
}
