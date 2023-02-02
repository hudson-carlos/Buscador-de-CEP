import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../provider";
import { checkCEP } from "../myfunctions";
import style from "../styles/forms.module.css";

export default function Forms({messageError}) {
  const { cep, setCep, error, setError } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => setCep(""), []);
  
  const enterDown = event => {
    const cepCheck = checkCEP(cep);

    if (event.key === 'Enter' && !cepCheck) {
      event.preventDefault();
      setError(messageError); 
    }
    if (event.key === 'Enter' && cepCheck) {
      event.preventDefault();
      navigate("/results");
    }
  };

  return (
    <form className={style.form}>
      <label 
        className={style.label}
        > 
          Digite um CEP ou um Endereço:
        <input
          className={error ? style.inputError : style.myInput}
          autoFocus
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
      <p className={style.messageError}>{error}</p>
    </form>
  );
}