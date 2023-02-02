import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { checkCEP } from "../myfunctions";
import { MyContext } from "../provider";
import style from "../styles/button.module.css";

export default function Button({messageError, route, name}) {
  const { cep, setError } = useContext(MyContext);
  const navigate = useNavigate();  
 
  return (
    <button
      className={style.myButton} 
      type="button"
      onClick={() =>  {
        const cepCheck = checkCEP(cep);
        if (cepCheck) {
          navigate(route);
        }
        else setError(messageError);
      }}
    >
      {name}
    </button>

  );
}
