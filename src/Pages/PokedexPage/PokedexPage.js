import React from "react";
import { goToHomePage } from "../../router/coordinator";
import {useNavigate} from 'react-router-dom'


export function PokedexPage() {

  const navigate = useNavigate();

    return (
      <div>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>


          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'/>          
          Pokedex Page
          <br></br>
          
         
        
      </div>
    );
  }
  
