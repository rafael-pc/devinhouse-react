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
  const [starwars, setStarwars] = useState({});
  const [idCharacter, setidCharacter] = useState(1);

  useEffect(() => {
    async function getPerson(id) {
      const response = await fetch(`https://swapi.py4e.com/api/people/${id}`);
      const starwarsJson = await response.json();
      setStarwars(starwarsJson);
    }
    getPerson(idCharacter);
  }, [idCharacter]);

  // useEffect para alterar título

  // useEffect para alterar personagem

  return (
    <div>
      <Header title={starwars.name} />
      <SeletorPersonagem
        valor={parseInt(idCharacter)}
        onChange={(e) => setidCharacter(e.target.value)}
      />
      <Personagem
        nome={starwars.name}
        nascimento={starwars.birth_year}
        genero={starwars.gender}
        peso={starwars.mass}
        altura={starwars.height}
        corOlhos={starwars.eye_color}
        corCabelo={starwars.hair_color}
      />
    </div>
  );
}

export default App;
