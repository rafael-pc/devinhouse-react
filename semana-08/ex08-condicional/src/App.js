import "./App.css";
import System from "./components/System";

function App() {
  return (
    <>
      <h1 className="title">Solar System</h1>
      <div className="container">
        <System planet="Mercury"></System>
        <System planet="Venus"></System>
        <System planet="Earth"></System>
        <System planet="Mars"></System>
        <System planet="Jupiter"></System>
        <System planet="Saturn"></System>
        <System planet="Uranus"></System>
        <System planet="Neptune"></System>
      </div>
    </>
  );
}

export default App;
