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

export default function PokemonCard({name, image}) {
  const navigate = useNavigate();
  
  return (
    <Card sx={{ maxWidth: 500, margin:"1em", align:"center" }}>
      <CardMedia
        component="img"
        height="150"
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
      <ButtonGroup Box sx={{ height:'50%' }}
        disableElevation
        aria-label="Disabled elevation buttons"
        aling="center"
        
      > 
        <Button size="small"><h6>Remover</h6></Button>
        <Button size="small" onClick={() => goToDetailsPage(navigate)}><h6>Ver Detalhes</h6></Button>
      </ButtonGroup>
    </Card>
  );
}
