function Mercury({planet, name}) {
  return (
    <div className="planet">
      <img src={planet} alt="mercury" className="planet-img"/>
      <span>{name}</span>
    </div>
  );
}

export default Mercury;
