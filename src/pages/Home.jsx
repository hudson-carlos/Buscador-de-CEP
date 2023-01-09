import {useContext} from "react";
import { MyContext } from "../provider";
import { useNavigate } from "react-router-dom";
import ButtonSearch from "../components/ButtonSearch";

function Home() {
  const { cep, setCep, error, setError } = useContext(MyContext);
  const navigate = useNavigate();
  const messageError = "Digite um CEP ou um Endereço"; 
  
  const enterDown = event => {
    if (event.key === 'Enter' && !cep) {
      event.preventDefault();
      setError(messageError); 
    }
    if (event.key === 'Enter' && cep) {
      event.preventDefault();
      navigate("/results");
    }
  };

  return (
    <main>
      <h1>Buscar CEP</h1>
      <form>
        <label>Digite um CEP ou um Endereço:
          <input 
            type="text" 
            name="search"
            value={cep} 
            placeholder="Não utilize nº de casa /apto/lote/prédio ou abreviação"
            onChange={e => {
              setError("");
              setCep(e.target.value);
            }} 
            onKeyDown={enterDown} 
          />
        </label>
        <p>{error}</p>
        <ButtonSearch messageError={messageError}/>    
    </form>
    </main>
  );
}

export default Home;
