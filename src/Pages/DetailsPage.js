import { Button, Text, Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";



export function DetailsPage() {
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

          <Button margin="15px" onClick={() => goToHomePage(navigate)}>Pokedex Page</Button>
          
        </Flex> 
          
          <Grid
            h='600px'
            templateRows='repeat(4, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={4}
            
          >
            <GridItem rowSpan={2} colSpan={1} bg='tomato' />
            <GridItem rowSpan={4} colSpan={1} bg='papayawhip' />
            <GridItem rowSpan={1} colSpan={1} bg='blue' />
            <GridItem rowSpan={3} colSpan={1} bg='blue' />
            <GridItem rowSpan={2} colSpan={1} bg='tomato' />


          </Grid>



        
      </Box>
    );
  }
  
