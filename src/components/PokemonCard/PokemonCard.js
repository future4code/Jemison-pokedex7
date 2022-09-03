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
            direction='column'
            bg='blue.300'
            
            >
           {pokemon.map((poke) => {
            return (
                  
                  <Flex key={poke.data.id} justifyContent='flex-start' flexWrap='wrap' direction='row'>
                    
                    <Flex justify='center' align='center' direction='column' w='200px'>
                      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.data.id}.png`} />
                      <Text>{poke.data.name}</Text>
                      
                    </Flex>
                    <Flex justify='center'>
                      
                      <Button fontSize='8px' w='50px' h='30px' margin='15px'>
                        Detalhes
                      </Button> 
                     
                      <Button fontSize='8px' w='auto' h='30px'margin='15px'>Adicionar a Pokédex</Button>
                    </Flex>
                  </Flex>  
                )
          })}
          </Flex>
      
    </Flex>
    );
  };
