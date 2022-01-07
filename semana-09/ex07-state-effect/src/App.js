import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [numero, setNumero] = useState(0);
  // const [menos, setMenos] = useState(0);

  function diminuir() {
    setNumero((cont) => cont + 1);
  }
  function adicionar() {
    setNumero((cont) => cont - 1);
  }

  useEffect(() => {
    if(numero < 0){
      alert('O número não pode ser negativo')
      setNumero(0)
    }
    if(numero >= 20){
      alert('Número máximo atingido! Resetando...')
      setNumero(0)
    }
  }, [numero]);

  return (
    <>
      <button onClick={adicionar}>Menos</button>
      <button onClick={diminuir}>Mais</button>

      <div>{`O numero atual é ${numero}`}</div>
    </>
  );
}

export default App;
