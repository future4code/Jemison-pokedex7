import React from "react"
import { Flex, Image, Button } from "@chakra-ui/react"



export const PokemonCard = () => {
    return (
      <Flex>
        <Flex
          height='2xl'
          width='4xl'
          >


          
          <Image src='https://i.pinimg.com/originals/bc/cd/65/bccd657eb217b5a942c7f81188c6b4b7.jpg'/>
        </Flex>
        <Button>
          <button>Remover da Pokédex</button>
          <br></br>
          <button>Adicionar a Pokédex</button>
        </Button>
    </Flex>
    );
  };
