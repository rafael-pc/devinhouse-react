function Saturn({ planet, name }) {
  return (
    <div className="planet">
      <img src={planet} alt="saturn" className="planet-img" />
      <span>{name}</span>
    </div>
  );
}

export default Saturn;
