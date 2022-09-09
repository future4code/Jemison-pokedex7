import React from "react";
import { goToHomePage } from "../../router/coordinator";
import {useNavigate} from 'react-router-dom'


export function PokedexPage() {

  const navigate = useNavigate();

    return (
      <div>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>

          <br></br>
          <img src='https://img1.gratispng.com/20171220/kqw/pokeball-png-5a3a4a7e247ce7.9167778215137695981495.jpg'/>          
          <br></br>
          Pokedex Page
          <br></br>
          
         
        
      </div>
    );
  }
  
