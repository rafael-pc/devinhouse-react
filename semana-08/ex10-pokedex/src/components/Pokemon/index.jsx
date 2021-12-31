// import { handleGenerateBg1 } from "../utils"
// import { handleGenerateBg2 } from "../utils"

const Pokemon = ({photo, name, hp, attack, defense, type, color1, color2}) => {

    // const typesColor1 = handleGenerateBg1(color1[0],color2[0])
    const typesColor1 = color1
    const typesColor2 = color2
    console.log(typesColor1)
    return(
      <div className="pokemon" style={{background: `linear-gradient(${typesColor1},${typesColor2})`}}>
      {/* <div className="pokemon" style={{backgroundImage: 'linear-gradiente(${typesColor})'}}> */}
        <div className="pokemon-img">
          <img
           src={photo}
           alt={name}
           className="img"
          />
        </div>

        <h2>{name}</h2>

        <ul>
          <li>HP: {hp}</li>
          <li>Attack: {attack}</li>
          <li>Defence: {defense}</li>
        </ul>

        <div>{[type.join(' / ')]}</div>
      </div>
    )
}

export default Pokemon