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

          <Button margin="15px" boxShadow="dark-lg" onClick={() => goToHomePage(navigate)}>Pokedex Page</Button>
          
        </Flex> 
          
          <Grid
            h='600px'
            m={3}
            templateRows='repeat(4, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={4}
            
            
          >
            <GridItem rowSpan={2} colSpan={1} bg='teal.200' border="1px">
            <Text fontSize='3xl' align={"center"}>Imagem Frontal</Text>
            </GridItem>
            <GridItem rowSpan={4} colSpan={1} bg='green.100' border="1px" >
            <Text fontSize='3xl' align={"center"}>Statisticas</Text>
            <br></br>
            <Text fontSize='2xl' align={"center"}>
            HP: 46
            <br></br>
            Ataque: 39
            <br></br>
            Defesa: 52
            <br></br>
            Ataque Especial: 43
            <br></br>
            Defesa Especial: 54
            <br></br>
            Velocidade: 54
            </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg='cadetblue' border="1px" >
            <Text fontSize='3xl' align={"center"}>
            Tipo 1
            <br></br>
            Tipo 2</Text>
            </GridItem>
            <GridItem rowSpan={3} colSpan={1} bg='cadetblue'  border="1px" >
            <Text fontSize='3xl' align={"center"}>Movimentos</Text>
            <br></br>
            <Text fontSize='2xl' align={"center"}>
            Movimento 1
            <br></br>
            Movimento 2
            <br></br>
            Movimento 3
            </Text>
         
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} bg='teal.200'  border="1px" >
            <Text fontSize='3xl' align={"center"}>Imagem de costas</Text>
            </GridItem>


          </Grid>



        
      </Box>
    );
  }
  
