// 'use client'
// import { LinkBtn } from "@/components/Main/Card/card-button"
// import Training from "@/components/Main/Curriculo/training"
// import Experience from "@/components/Main/Curriculo/experience"
// import Skills from "@/components/Main/Curriculo/skills"
// import styled from "styled-components"

// interface CurriculoProps {

// }

// const Div = styled.div`
//     background-color: #e1e6e3;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     padding-bottom: 1rem;
//     @media screen and (min-width: 768px){
//         padding-top: 110px;
//     }
// `

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `

// const TagDiv = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 0.5rem;
//     padding: 2rem;
// `

// const Square = styled.div`
//     width: 20px;
//     height: 20px;
//     background-color: #274862;
// `


// const ContentLink = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding-bottom: 2rem;
//     width: 90%;
//     @media screen and (min-width: 1024px){
//         width: 50%;
//     }
// `

// const LinkActive = styled(LinkBtn)`
//     border: none;
//     text-align: center;
//     background-color: #274862;
//     color: #fff;
//     @media screen and (min-width: 768px){
//         display: block;
//         padding-top: 0.2em;
//     }
//     `

// const Middle =  styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     display: flex;
//     padding: 2rem 0 2rem ;
//     `

// const TitleMiddle = styled.div`
//     width: 90%;
//     @media screen and (min-width: 1024px){
//         width: 50%;
//     }
// `


// export default function Curriculo(props : CurriculoProps){
//     return(
//         <Div>
//             <Container>
//                 <TagDiv>
//                     <Square></Square>
//                     <h1>Currículo</h1>
//                 </TagDiv>
//                 <ContentLink>
//                     <h3>Experiência</h3>
//                     <LinkActive href="#">Baixar cv</LinkActive>
//                 </ContentLink>
//             </Container>
//             <Experience/>
//             <Middle>
//                 <TitleMiddle>
//                     <h3>Formação</h3>
//                 </TitleMiddle>
//             </Middle>
//             <Training/>
//             <Skills/>
//         </Div>
//     )
// }