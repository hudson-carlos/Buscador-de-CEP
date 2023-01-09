import {useState, useEffect, useContext} from "react"
import { MyContext } from "../provider";
import api from "../api";
import Loading from "../components/Loading";
import ButtonSearch from "../components/ButtonSearch";
import Table from "../components/Table";


export default function Results() {
  const { cep } = useContext(MyContext);
  const [arr, setArr] = useState([]); 
  const [loading, setLoading] = useState(true);

  async function searchCEP() {
    const ceps = await api(cep.replace(/ /g, "-"));
    if (Array.isArray(ceps)) setArr(ceps);
    else setArr([ceps]);
    setLoading(false);
  }
  
  useEffect(() => {
    searchCEP();
  },[]);

  if (loading) return <Loading /> 
  return (
    <div>
      <h1>Resultado da Busca por Endereço ou CEP</h1>
      <ButtonSearch 
        route={"/"}
        name={"New Search"}
      />
      <Table arr={arr} />      
    </div>
  );
}
