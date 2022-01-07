import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [ligado, setLigado] = useState(false);

  useEffect(() => {
    console.log("executou");
  }, [ligado]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: ligado ? "#ffee00" : "#000",
        }}
      >
        <button onClick={() => setLigado((v) => !v)}>
          {ligado ? "apagar" : "acender"}
        </button>
      </div>
    </>
  );
}

export default App;
