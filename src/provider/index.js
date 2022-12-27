import {useState, createContext} from "react";

export const MyContext = createContext();

export function TodoProvider({ children }) {
  const [cep, setCep] = useState('');
  
  const value = {
    cep,
    setCep,
  };

  return (<MyContext.Provider value={value}>{children}</MyContext.Provider>);
}
