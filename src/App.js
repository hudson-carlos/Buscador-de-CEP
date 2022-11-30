import {useEffect} from "react";
import api from "./api";

function App() {
  useEffect(() => {
    api().then(ufs => console.log(ufs));
  }, [])

  return (
    <div>
      <h1>Hudson</h1>
    </div>
  );
}

export default App;
