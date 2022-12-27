import {useState, useEffect, useContext} from "react"
import { Link } from "react-router-dom";
import api from "./api";
import { MyContext } from "./provider"

export default function Results() {
  const { cep, setCep } = useContext(MyContext);
  const [arr, setArr] = useState([]); 
  
  async function searchCEP() {
    const ceps = await api(cep.replace(/ /g, "-"));
    console.log(ceps);
    setArr(ceps);
  }
  
  useEffect(() => {
    searchCEP();
  },[]);

  return (
    <div>
      <h1>Resultado da Busca por Endereço ou CEP</h1>
      <table>
        <tr>
          <th>Logradouro/Nome</th>
          <th>Bairro/Distrito</th>
          <th>Localidade/UF</th>
          <th>CEP</th>
        </tr>
        {arr.map(({cep, uf, cidade, bairro, logradouro}) => (
          <tr>
            <td>{logradouro}</td>
            <td>{bairro}</td>
            <td>{cidade}/{uf}</td>
            <td>{cep}</td>
          </tr>
        ))}
      </table>
      <Link to={"/"}>
        <button
        onClick={() => setCep('')}
        >Nova Busca
        </button>
      </Link>
    </div>
  );
}
