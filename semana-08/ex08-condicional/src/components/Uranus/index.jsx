function Uranus({ planet, name }) {
  return (
    <div className="planet">
      <img src={planet} alt="uranus" className="planet-img" />
      <span>{name}</span>
    </div>
  );
}

export default Uranus;
