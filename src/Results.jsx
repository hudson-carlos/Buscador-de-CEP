import {useState, useEffect, useContext} from "react"
import { Link } from "react-router-dom";
import api from "./api";
import { MyContext } from "./provider"

export default function Results() {
  const { cep, setCep } = useContext(MyContext);
  const [arr, setArr] = useState([]); 
  
  async function searchCEP() {
    const ceps = await api(cep.replace(/ /g, "-"));
    if (Array.isArray(ceps)) setArr(ceps);
    else setArr([ceps]);
  }
  
  useEffect(() => {
    searchCEP();
  },[]);

  return (
    <div>
      <h1>Resultado da Busca por Endereço ou CEP</h1>
      <Link to={"/"}>
        <button
          onClick={() => setCep('')}
        >
          Nova Busca
        </button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Logradouro/Nome</th>
            <th>Bairro/Distrito</th>
            <th>Localidade/UF</th>
            <th>CEP</th>
          </tr>
        </thead>
        <tbody>
          {arr.map(({cep, uf, cidade, bairro, logradouro}) => (
            <tr key={cep}>
              <td>{logradouro}</td>
              <td>{bairro}</td>
              <td>{cidade}/{uf}</td>
              <td>{cep.split("").splice(0, 5).join("")}-{cep.split("").splice(-3).join("")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
