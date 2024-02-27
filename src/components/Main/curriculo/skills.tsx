import styled from "styled-components"

const ContainerSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    `

const SkillContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #fff;
    padding: 1rem;
    width: 90%;
    box-shadow: -6px 4px 10px rgba(0, 0, 0, 0.3);
    @media screen and (min-width: 1024px){
        width: 50%;
    }
`

const TagDiv = styled.div` 
    display: flex;
    flex-direction: column;
`

const Square = styled.div`
    width: 15px;
    height: 15px;
    background-color: #274862;
`

const Skill = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-top: 1rem;
`
export default function Skills(){
    return(
        <ContainerSkill>
            <SkillContent>
                <TagDiv>
                    <h3>Habilidades profissionais</h3>
                    <Skill>
                        <Square></Square>
                        <p>Estratégia Go-to-Market</p>
                    </Skill>
                    <Skill>
                        <Square></Square>
                        <p>Trabalho em equipe</p>
                    </Skill>
                    <Skill>
                        <Square></Square>
                        <p>Análise de dados digitais</p>
                    </Skill>
                </TagDiv>
                <TagDiv>
                    <h3>Idiomas</h3>
                    <Skill>
                        <Square></Square>
                        <p>Português (nativo)</p>
                    </Skill>
                    <Skill>
                        <Square></Square>
                        <p>Inglês (intermediário)</p>
                    </Skill>
                </TagDiv>
            </SkillContent>
        </ContainerSkill>
    )
}