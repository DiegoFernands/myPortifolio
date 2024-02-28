import styled from "styled-components";

interface ProjectCardProps {}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1rem;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Text = styled.div`
  flex: inherit;
  width: 90%;
  background-color: #fff;
  padding: 20px;
  p {
    font-size: 0.9rem;
  }
`

const TitleProject = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 0.7rem solid #274862;
  background-color: #fff;
  width: 90%;
`

const Div = styled.div`
  padding-top: 1rem;
  margin-left: 0.5rem;
  h3 {
    color: #274862;
  }
  p {
    font-size: 0.75rem;
    font-weight: 500;
  }
`

const Image = styled.img`
  width: 90%;
`

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <CardContainer>
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
        <Image src="/image.png" alt="Imagem do Projeto" />
      </Content>
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
        <Image src="/image.png" alt="Imagem do Projeto" />
      </Content>
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
        <Image src="/image.png" alt="Imagem do Projeto" />
      </Content>
    </CardContainer>
  );
}