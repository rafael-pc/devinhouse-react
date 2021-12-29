function Venus({planet, name}) {
  return (
    <div className="planet">
      <img src={planet} alt="venus" className="planet-img" />
      <span>{name}</span>
    </div>
  );
}

export default Venus;
