import "./App.css";
import { useState } from "react";

function App() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let horaInicial = new Date().toLocaleTimeString();
  let dataAtual = new Date().toLocaleDateString("pt-BR", options);

  const [hora, setHora] = useState(horaInicial);
  const [date] = useState(dataAtual);

  function atualizaHora() {
    horaInicial = new Date().toLocaleTimeString();
    setHora(horaInicial);
  }

  setTimeout(atualizaHora, 1000);
  return (
    <>
      <div className="container">
        <h1 className="title">Horário de Brasília</h1>
        <p className="description">
          Acerte seu relógio com o horário de Brasília, a hora oficial do Brasil
        </p>
        <div className="date">{date}</div>
        <h2 className="time">{hora}</h2>
        <p className="content">
          A hora certa é sincronizada automaticamente. Não é necessário
          recarregar a página.
        </p>
        <p className="footer">
          <img
            src="https://flagicons.lipis.dev/flags/4x3/br.svg"
            alt="brasil-flag"
            className="img"
          /> Brasil (UTC-3) - Horário de Brasília, a hora oficial do Brasil -{" "}
          {date}
        </p>
      </div>
    </>
  );
}

export default App;
