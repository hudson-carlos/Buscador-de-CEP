import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../provider";

export default function Button({messageError}) {
  const { cep, setError } = useContext(MyContext);
  const navigate = useNavigate();  
 
  return (
    <button 
      type="button"
      onClick={() =>  {
        if (cep) {
          navigate("/results");
        }
        else setError(messageError);
      }}
    >
      Buscar
    </button>

  );
}
