function Mars({ planet, name }) {
  return (
    <div className="planet">
      <img src={planet} alt="mars" className="planet-img" />
      <span>{name}</span>
    </div>
  );
}

export default Mars;
