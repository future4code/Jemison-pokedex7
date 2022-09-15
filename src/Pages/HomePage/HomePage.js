import { Container, Grid } from '@mui/material'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Headers from '../../components/Header/Index'
import PokemonCard from '../../components/PokemonCard/index'

export const HomePage = () => {
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
                    {pokemons.map((pokemon, key) =>
                        <Grid item xs={12} sm={6} md={2} lg={2} key={key}>
                            <PokemonCard
                                id={pokemon.data.id}
                                name={pokemon.data.name} 
                                image={pokemon.data.sprites.front_default} 
                            />  
                        </Grid>)
                    }
                </Grid>

            </Container>
        </div>
    )
}