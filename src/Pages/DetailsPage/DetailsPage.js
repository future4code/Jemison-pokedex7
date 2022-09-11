import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { goToHomePage } from "../../router/coordinator";
import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box'
import { useRequestData } from '../../hooks/useRequestData';
import { Grid1, Grid2, Grid3, Grid4, MainContainer, TypesContainer } from './styled';



export function DetailsPage() {
    const navigate = useNavigate();

    const {id} = useParams();
    const {data} = useRequestData(`https://pokeapi.co/api/v2/pokemon/${id}`);

    
    
  return (
  
  <Container >
          
    <MainContainer>       
        <Grid1>
          <div>
                <h4>Type</h4>
                {data.types?.length > 1 ?  <span>{data.types?.[0].type.name}</span> : null}
                {data.types?.length > 1 ? <span>{data.types?.[1].type.name}</span> : null}
                {data.types?.length === 1 ? <span>{data.types?.[0].type.name}</span> : null}
          </div>
          <div>
            {[data].map((image) => {
              console.log(image)
              return (
                <div>
                  <img src={image.sprites?.front_default} alt="pokemon"/>
                </div>
                )
            })}
            
          </div>
        </Grid1>

        <Grid2>
          
          <div>
            {[data].map((image) => {
              console.log(image)
              return (
                <div>
                  <img src={image.sprites?.back_default} alt="pokemon"/>
                </div>
                )
            })}
          </div>
        </Grid2>
    
    
        <Grid3>
          <h2>Abilities</h2>
          <div>
            {data.abilities?.map(({ability: {name}}) => { //habilidades
            
              return(
                <div>
            
                  <p>{name}</p>
            
                </div>
              )})}
          </div>
        
         
          <h2>Atack</h2>
          <div>
            {data.moves?.slice(0,3).map(({move: {name}}) => { //ataques
              return(
                <div>
                  <p>{name}</p>
                </div>
              )
            })}
          </div>
        </Grid3>
          
          
          <Grid4>
            <h2>Base Status</h2>
            <div>
              {data.stats?.map((stat) => { //status do pokemon
                return(
                  <>
                    <p>{stat.stat.name}:{stat.base_stat}</p>
                  </>
                )
              })}
              </div>
          </Grid4>
          
        
        </MainContainer>

          <Box display="flex" justifyContent="flex-end">
            

            <Button
            variant="contained" 
            onClick={() => 
            goToHomePage(navigate)}>
            Pokedex Page</Button>
          </Box>

        </Container>

        
        

      )
}
