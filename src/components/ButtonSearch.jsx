import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../provider";

export default function Button({messageError, route, name}) {
  const { cep, setError } = useContext(MyContext);
  const navigate = useNavigate();  
 
  return (
    <button 
      type="button"
      onClick={() =>  {
        if (cep) {
          navigate(route);
        }
        else setError(messageError);
      }}
    >
      {name}
    </button>

  );
}
