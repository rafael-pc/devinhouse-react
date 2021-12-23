import "./style.css"

function Button({title, background}){
    return (
        <button className="btn"
        style={{background: background}}>{title}</button>
    )
}

export default Button