import {Box, Button, Flex, Text} from '@chakra-ui/react'
import { goToPokedexPage, goToDetailsPage } from '../routes/coordinator';
import { useNavigate } from 'react-router-dom';

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
            <Button margin="15px" onClick={() => goToPokedexPage(navigate)}>Pokedex Page</Button>
            <Button onClick={() => goToDetailsPage(navigate)}>DetailsPage</Button>
          </Flex>
        </Flex> 
      </Box>
    );
  }
  
  