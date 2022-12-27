import {useContext} from "react";
import { MyContext } from "./provider"

function App() {
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
        <button type="button">
          Buscar
        </button>
      </form>
    </main>
  );
}

export default App;
