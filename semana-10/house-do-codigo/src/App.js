import "./App.css";
import { Routes, Route } from "react-router-dom";

// import Books from "./components/Books";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart/";

import Menu from "./components/Menu";

function App() {
  // const listRef = useRef(null);

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
