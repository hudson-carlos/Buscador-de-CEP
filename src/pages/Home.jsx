import ButtonSearch from "../components/ButtonSearch";
import Forms from "../components/Forms";
import "../globalStyle.css";
import style from "../styles/home.module.css";

function Home() {  
  const messageError = "Informe o Endereço com no mínimo 3(três) caracteres!"; 

  return (
    <main className={style.home}>
    <h1 className={style.title}>Busca CEP</h1>
    <Forms messageError={messageError} />
    <ButtonSearch 
      messageError={messageError}
      route={"/results"}
      name={"Buscar"} 
    />    
    </main>
  );
}

export default Home;
