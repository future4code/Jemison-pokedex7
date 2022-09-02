import {Box, Button, Flex, Grid, GridItem, Text} from '@chakra-ui/react'
import { goToPokedexPage, goToDetailsPage } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { PokemonCard } from '../components/PokemonCard/PokemonCard';
import { useRequestData } from '../hooks/useRequestData';
import { BASE_URL } from '../constants/urls';

export function HomePage() {
  const navigate = useNavigate();


  return (
      <Box>
        <Flex
          alignItems='center'
          flexDirection='column'
          justifyContent='center'
          margin='14'
        >
          <Text fontSize='4xl' fontFamily=''>Home Page</Text>
          
          
          <Flex alignItems='center'>
            <Button margin="15px" boxShadow="dark-lg" onClick={() => goToPokedexPage(navigate)}>Pokedex Page</Button>
            <Button boxShadow="dark-lg" onClick={() => goToDetailsPage(navigate)}>DetailsPage</Button>
          </Flex>
        </Flex> 
        <PokemonCard/>
      </Box>
    );
  }
  
  