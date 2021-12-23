function Contatos({ photo, name, description }) {
  return (
    <div className="profile">
      <div className="profile-img">
        <img src={photo} alt={name} className="img" />
      </div>

      <div className="user">
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Contatos;
