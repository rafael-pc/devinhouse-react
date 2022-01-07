import "./App.css";
import { useState } from "react";

function App() {
  const [numero, setNumero] = useState(0);

  function diminuir() {
    setNumero((cont) => cont + 1);
  }
  function adicionar() {
    setNumero((cont) => cont - 1);
  }

  return (
    <>
      <button onClick={diminuir}>Mais</button>
      <button onClick={adicionar}>Menos</button>

      <div>{`O numero atual é ${numero}`}</div>
    </>
  );
}

export default App;
