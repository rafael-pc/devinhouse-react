function Jupiter({ planet, name }) {
  return (
    <div className="planet">
      <img src={planet} alt="jupiter" className="planet-img" />
      <span>{name}</span>
    </div>
  );
}

export default Jupiter;
