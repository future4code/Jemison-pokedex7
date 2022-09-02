import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
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
          <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'/>          
          <Text>Pokedex Page</Text>
          <Button boxShadow="dark-lg" onClick={() => goToHomePage(navigate)}>Voltar</Button>
        </Flex>
      </Box>
    );
  }
  
