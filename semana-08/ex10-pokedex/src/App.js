import "./App.css";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <>
      <h1 className="title">Pokedex</h1>
      <div className="container">
        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/bulbasaur.png"
          name="Bulbasaur"
          hp={45}
          attack={49}
          defense={49}
          type={["grass","poison"]}
          color1={["#86f400"]}
          color2={["#DE00F4"]}
        ></Pokemon>

        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/ivysaur.png"
          name="Ivysaur"
          hp={60}
          attack={62}
          defense={63}
          type={["grass","poison"]}
          color1={["#86f400"]}
          color2={["#DE00F4"]}
        ></Pokemon>

        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/venusaur.png"
          name="Venusaur"
          hp={80}
          attack={82}
          defense={83}
          type={["grass","poison"]}
          color1={["#86f400"]}
          color2={["#DE00F4"]}
        ></Pokemon>
        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/charmander.png"
          name="Charmander"
          hp={39}
          attack={52}
          defense={42}
          type={["fire"]}
          color1={["#FF3131"]}
          color2={["#FF3131"]}
        ></Pokemon>

        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/charmeleon.png"
          name="Charmeleon"
          hp={58}
          attack={64}
          defense={58}
          type={["fire"]}
          color1={["#FF3131"]}
          color2={["#FF3131"]}
        ></Pokemon>

        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/charizard.png"
          name="Bulbasaur"
          hp={78}
          attack={84}
          defense={78}
          type={["fire","flying"]}
          color1={["#FF3131"]}
          color2={["#00E0DA"]}
        ></Pokemon>
        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/squirtle.png"
          name="Squirtle"
          hp={44}
          attack={48}
          defense={65}
          type={["water"]}
          color1={["#3162FF"]}
          color2={["#3162FF"]}
        ></Pokemon>

        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/wartortle.png"
          name="Wartortle"
          hp={59}
          attack={63}
          defense={80}
          type={["water"]}
          color1={["#3162FF"]}
          color2={["#3162FF"]}
        ></Pokemon>

        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/blastoise.png"
          name="Blastoise"
          hp={79}
          attack={83}
          defense={100}
          type={["water"]}
          color1={["#3162FF"]}
          color2={["#3162FF"]}
        ></Pokemon>
        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/caterpie.png"
          name="Caterpie"
          hp={45}
          attack={30}
          defense={35}
          type={["bug"]}
          color1={["#80D800 "]}
          color2={["#80D800 "]}
        ></Pokemon>

        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/metapod.png"
          name="Metapod"
          hp={50}
          attack={20}
          defense={55}
          type={["bug"]}
          color1={["#80D800 "]}
          color2={["#80D800 "]}
        ></Pokemon>

        <Pokemon
          photo="https://img.pokemondb.net/artwork/vector/butterfree.png"
          name="Butterfree"
          hp={60}
          attack={45}
          defense={50}
          type={["bug","flying"]}
          color1={["#80D800 "]}
          color2={["#00E0DA "]}
        ></Pokemon>
      </div>
    </>
  );
}

export default App;
