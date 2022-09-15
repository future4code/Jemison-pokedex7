import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { goToDetailsPage } from '../../router/coordinator';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';

export default function PokemonCard({name, image, id}) {
  const navigate = useNavigate();
  
  return (
    <Card sx={{ maxWidth: 500, margin:"1em", align:"center" }}>
      <CardMedia
        component="img"
        width="100%"
        height="200px"
        align="center"
        image={image}
        alt={name}
        
      />
      <CardContent>
        <Typography 
          gutterBottom variant="h6" 
          component="div" 
          align="center">
          {name}
        </Typography>

      </CardContent>
      <ButtonGroup Box sx={{ display: 'flex', height:'100%', width: '100%', justifyContent: 'center', margin: '10px'}}
        disableElevation
        aria-label="Disabled elevation buttons"
        aling="center"
        
      > 
        <Button size="small" ><h6>Remover</h6></Button>
        <Button size="small" onClick={() => goToDetailsPage(navigate, id)}><h6>Ver Detalhes</h6></Button>
      </ButtonGroup>
    </Card>
  );
}
