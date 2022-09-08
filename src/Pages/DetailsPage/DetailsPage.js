import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../router/coordinator";
import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box'


export function DetailsPage() {
    const navigate = useNavigate();

      return (

        <Container >

      


          <Box display="flex" justifyContent="flex-end">
            <Button
            variant="contained" 
            onClick={() => 
            goToHomePage(navigate)}>
            Pokedex Page</Button>
          </Box>

        </Container>

        
        

      )
}
