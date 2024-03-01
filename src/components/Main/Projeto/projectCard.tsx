import styled from "styled-components";

interface ProjectCardProps {}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 1rem;
`
const Content = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  width: 90%;
`
const Text = styled.div`
  width: 90%;
  padding-bottom: 1rem;
  p {
    font-size: 0.9rem;
  }
`

const TitleProject = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding-top: 1rem;
  width: 100%;
`

const Div = styled.div`
  border-left: 0.7rem solid #274862;
  h3 {
    margin-left: 1rem;
    color: #274862;
  }
  p {
    font-size: 0.75rem;
    margin-left: 1rem;
    font-weight: 500;
  }
`
const Link =  styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  width: 100%;
`

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <CardContainer>
      <Content>
          <Div>
            <h3>Nome do projeto 01</h3>
            <p>Função</p>
          </Div>
        <TitleProject>
          <Text>
            <p>
              Sou um parágrafo. Aqui você pode adicionar e editar seu próprio
              texto. É fácil, basta clicar em Editar texto ou clicar duas vezes
              sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo
              lugar para você compartilhar a sua história.
            </p>
          </Text>
          <Link href="https://detona-ralph-gamma.vercel.app/" target="blank">
            <Image src="/image.png" alt="Imagem do Projeto" />
          </Link>
        </TitleProject>
      </Content>
      <Content>
          <Div>
            <h3>Nome do projeto 01</h3>
            <p>Função</p>
          </Div>
        <TitleProject>
          <Text>
            <p>
              Sou um parágrafo. Aqui você pode adicionar e editar seu próprio
              texto. É fácil, basta clicar em Editar texto ou clicar duas vezes
              sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo
              lugar para você compartilhar a sua história.
            </p>
          </Text>
          <Link href="https://detona-ralph-gamma.vercel.app/">
            <Image src="/image.png" alt="Imagem do Projeto" />
          </Link>
        </TitleProject>
      </Content>
      <Content>
          <Div>
            <h3>Nome do projeto 01</h3>
            <p>Função</p>
          </Div>
        <TitleProject>
          <Text>
            <p>
              Sou um parágrafo. Aqui você pode adicionar e editar seu próprio
              texto. É fácil, basta clicar em Editar texto ou clicar duas vezes
              sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo
              lugar para você compartilhar a sua história.
            </p>
          </Text>
          <Link href="https://detona-ralph-gamma.vercel.app/">
            <Image src="/image.png" alt="Imagem do Projeto" />
          </Link>
        </TitleProject>
      </Content>
    </CardContainer>
  );
}