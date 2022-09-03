import { Button, Text, Flex, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";



export function DetailsPage({id, }) {
    const navigate = useNavigate();

    

    return (
      <Box>
         <Flex
          alignItems='center'
          flexDirection='column'
          justifyContent='center'
          margin='14'
        >
          <Text>Details Page</Text>
          <Flex>

          </Flex>

          <Button margin="15px" onClick={() => goToHomePage(navigate)}>Pokedex Page</Button>
        </Flex> 
      </Box>
    );
  }
  
