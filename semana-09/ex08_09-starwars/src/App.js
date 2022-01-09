import "./App.css";
import React from "react";
import Personagem from "./components/Personagem";
import SeletorPersonagem from "./components/SeletorPersonagem";
import Header from "./components/Header";
import { useState } from "react";
import { useEffect } from "react";

// const estado_inicial = {
//   name: "",
//   birth_year: "",
//   gender: "",
//   mass: "",
//   height: "",
//   eye_color: "",
//   hair_color: "",
// };

function App() {
  // useState
  const [personagem, setPersonagem] = useState({});
  const [idPersonagem, setidPersonagem] = useState(1);

  useEffect(() => {
    async function getPerson(id) {
      const response = await fetch(`https://swapi.py4e.com/api/people/${id}`);
      const personagemJson = await response.json();
      setPersonagem(personagemJson);
    }
    getPerson(idPersonagem);
  }, [idPersonagem]);

  // useEffect para alterar título

  // useEffect para alterar personagem

  return (
    <div>
      <Header title={personagem.name} />
      <SeletorPersonagem
        valor={parseInt(idPersonagem)}
        onChange={(e) => setidPersonagem(e.target.value)}
      />
      <Personagem
        nome={personagem.name}
        nascimento={personagem.birth_year}
        genero={personagem.gender}
        peso={personagem.mass}
        altura={personagem.height}
        corOlhos={personagem.eye_color}
        corCabelo={personagem.hair_color}
      />
    </div>
  );
}

export default App;
