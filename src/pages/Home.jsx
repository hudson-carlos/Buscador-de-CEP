import ButtonSearch from "../components/ButtonSearch";
import Forms from "../components/Forms";

function Home() {  
  const messageError = "Informe o Endereço com no mínimo 3(três) caracteres!"; 

  return (
    <main>
      <h1>Busca CEP</h1>
    <Forms messageError={messageError} />
    <ButtonSearch 
      messageError={messageError}
      route={"/results"}
      name={"Search"} 
    />    
    </main>
  );
}

export default Home;
