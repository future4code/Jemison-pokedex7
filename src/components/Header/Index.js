import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"3em" }}>
      <AppBar position="static"  sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Box display="flex" justifiContent="space-between" width="100%">
            <Box component="img" src="/assets/pokemon-logo.png" height="3em" />
          </Box>
          <Button color="inherit">Ver POKEDEX</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
