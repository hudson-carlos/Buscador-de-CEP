import {useContext} from "react";
import { MyContext } from "./provider";
import { Link } from "react-router-dom"

function Home() {
  const { cep, setCep } = useContext(MyContext);
   
  return (
    <main>
      <h1>Busca CEP</h1>
      <form onChange={() => console.log(cep)}>
        <label>Digite um CEP ou um Endereço:
          <input 
            type="text" 
            name="search"
            value={cep} 
            placeholder="Não utilize nº de casa /apto/lote/prédio ou abreviação"
            onChange={(e) => setCep(e.target.value)} 
          />
        </label>
        <Link to={"/results"}>
          <button type="button">
            Buscar
          </button>
        </Link>
      </form>
    </main>
  );
}

export default Home;
