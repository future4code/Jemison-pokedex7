import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { goToHomePage } from "../../router/coordinator";
import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box'
import { useRequestData } from '../../hooks/useRequestData';


export function DetailsPage() {
    const navigate = useNavigate();

    const {id} = useParams();
    const {data} = useRequestData(`https://pokeapi.co/api/v2/pokemon/${id}`);
    
      console.log(data)
      return (
        <Container >
          <h2>Abilities</h2>
          <div>
            {data.abilities?.map(({ability: {name}}, key) => { //habilidades
              
              return(
                <div>
                     
                  <p>{name}</p>
                  
                </div>
              )
            })}
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
