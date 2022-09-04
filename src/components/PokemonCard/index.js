import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonCard({name, image}) {
  
  return (
    <Card sx={{ maxWidth: 345, margin:"1em", align:"center" }}>
      <CardMedia
        component="img"
        height="200"
        align="center"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography 
          gutterBottom variant="h5" 
          component="div" 
          align="center">
          {name}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Remover</Button>
        <Button size="small">Ver Detalhes</Button>
      </CardActions>
    </Card>
  );
}
