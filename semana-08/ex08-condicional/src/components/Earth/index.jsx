function Earth({ planet, name }) {
  return (
    <div className="planet">
      <img src={planet} alt="earth" className="planet-img" />
      <span>{name}</span>
    </div>
  );
}

export default Earth;
