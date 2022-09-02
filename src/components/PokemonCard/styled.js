import styled from "styled-components";
//import { backgroundCard } from "../../constants/colors";

export const PokemonCardContainer = styled.div`
  height: 35vh;
  width: 250px;
  margin: 10px;
  display: grid;
  grid-template-rows: 90% 10%;
`

export const ImgContainer = styled.div`
  background-color: #a1a1ff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PokeImg = styled.img`
  height: 60%;
`

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
