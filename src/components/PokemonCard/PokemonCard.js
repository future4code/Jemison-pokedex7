import React, {useEffect, useState} from "react"
import { Flex, Image, Button, Box, Text, Grid, GridItem} from "@chakra-ui/react"
import { BASE_URL } from "../../constants/urls";
import axios from "axios";



export const PokemonCard = () => {
    
    const [pokemon, setPokemon] = useState([])

   useEffect(() => {
    getPokemons();
   }, [])
       

    const getPokemons = () => {
      let endpoints = []
      for (let i = 1; i < 20; i++){
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      }
      
      axios.all(endpoints.map((endpoint) => axios.get((endpoint)))).then((response) => setPokemon(response))

    }

    
    return (
      <Flex direction='column'>
          <Flex
            direction='column' // teste 
            bg='blue.300'
            
            >
           {pokemon.map((poke, index) => {
            return (
                  <Box>
                    <Text>{poke.data.name}</Text>
                    <Image src={poke.data.sprites.front_default} />
                  </Box>  
                )
          })}
          </Flex>
      
    </Flex>
    );
  };
