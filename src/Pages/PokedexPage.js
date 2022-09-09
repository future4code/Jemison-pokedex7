import { goToHomePage } from "../router/coordinator";
import {useNavigate} from 'react-router-dom'


export function PokedexPage() {

  const navigate = useNavigate();

    return (
    <>
    <header>
      <h1>POKEDEX</h1>
      <img  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQr8WoeDnW8zkHuI-whug-NWX2-6u6rMXHg&usqp=CAU " />
    </header>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVajkEAW7o_t6BVI_BfV6iaNTidpC0H6OSOg&usqp=CAU" alt=""></img>
      <div>
      <button >Detalhes</button>
      <button >Remover</button>
      <button onClick={()=>goToHomePage(navigate)}>Voltar</button>
      </div>
    
    </div>

    </>
    )
  }
  
