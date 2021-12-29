function Produto({ photo, name, price }) {
  return (
    <div className="produto">
      <div>
        <img src={photo} alt="produto" className="img"></img>
      </div>
      <p className="description">{name}</p>
      <span className="price">
        <b>{price}</b>
      </span>
    </div>
  );
}

export default Produto;
