import "./App.css";
import { useState } from "react";

function App() {
  const [name] = useState("Rafael");
  const [city] = useState("Guarulhos");
  const [age] = useState(31);
  const [movie, setMovie] = useState("Interestelar");
  return (
    <>
      <div className="container">
        <p>
          Meu nome é {name}, nasci na cidade de {city} e tenho {age} anos, meu
          filme preferido é {movie}.
        </p>
       <button className="btn" onClick={()=> {setMovie('Lagoa Azul')}}>Mudar filme</button>
      </div>
    </>
  );
}

export default App;
