import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function Books({ image, title, price }) {
  return (
    <div className="item-book">
      <img src={image} alt="Foto do livro" className="image-book" />
      <div>{title}</div>
      {/* <div className="price">R$ {price.toFixed(2).toString().replace(".", ",")}</div> */}
      <div className="price">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </div>
      <div className="btn">
        <button>Comprar</button>
        <button>
          <Link to="/details" className="menu-list-item">
            Detalhes
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Books;
