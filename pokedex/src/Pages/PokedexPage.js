import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { goToHomePage } from "../routes/coordinator";
import {useNavigate} from 'react-router-dom'


export function PokedexPage() {

  const navigate = useNavigate();

    return (
      <Box>
         <Flex
          alignItems='center'
          flexDirection='column'
          justifyContent='center'
          margin='14'
        >
          <Text>Pokedex Page</Text>
          <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
        </Flex>
      </Box>
    );
  }
  
  