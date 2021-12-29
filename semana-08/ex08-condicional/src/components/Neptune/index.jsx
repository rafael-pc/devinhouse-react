function Neptune({ planet, name }) {
  return (
    <div className="planet">
      <img src={planet} alt="neptune" className="planet-img" />
      <span>{name}</span>
    </div>
  );
}

export default Neptune;
