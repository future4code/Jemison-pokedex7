import { Container, Grid } from '@mui/material'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Headers from '../components/Header/Index'
import PokemonCard from '../components/PokemonCard/index'
import { useRequestData } from '../hooks/useRequestData'

export const HomePage = () => {
   

    const addToPokedex=(pokemonAdiciondo)=>{
        console.log(pokemonAdiciondo)
    }
    

    
     const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    },[])

    const getPokemons = () => {
        var endpoints = []
        for(var i=1; i<20; i++) {
           endpoints
            .push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        

        axios
            .all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => setPokemons(res))
            .catch((error) => console.log(error))

    }


    return (
        <div>
            
            <Headers/>
            <Container maxWidth="xl">
                <Grid container spacing={0.2}>
                     {pokemons && pokemons.map((pokemon) => 
                        <Grid item xs={3} key={pokemon.id} pokemon={pokemon}  >
                            <PokemonCard 
                                id={pokemon.id}
                                 name={pokemon.data.name} 
                                 image={pokemon.data.sprites.front_default} 
                                addToPokedex={addToPokedex}
                                pokemonAdicionado={pokemon}
                            />  
                        </Grid>)
                    }
                </Grid>

            </Container>
        </div>
    )
}