import "./styles.css"

function Header({title}) {
  return (
    <div className="header">
      <h1>
        <span className="title">{title}</span>
      </h1>
    </div>
  );
}

export default Header;