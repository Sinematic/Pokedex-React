import "../styles/Card.css"

function Card(props) {

    return (
        <article className="pokemon-card" id={props.number} style={{ order: props.number }}>

            <img src={props.image} alt={props.name} className="pokemon-img" />

            <h3 className="pokemon-name">{props.name} ({(// Je m'assure que le numéro du Pokémon soit en 3 caractères
                props.number < 10 ? "00" + props.number : (props.number < 100 ? "0" + props.number : props.number))})</h3>

            <div className="pokemon-types-div">
                <img src={props.type1[1]} alt="Type du Pokémon" className="pokemon-types-img" />
                {props.type1[0] !== props.type2[0] ? <img src={props.type2[1]} alt="Type du Pokémon" className="pokemon-types-img pokemo-duo-types" /> : null}
            </div>
            
            <p className="pokemon-types">{props.type1[0]}{props.type1[0] !== props.type2[0] ? " - " + props.type2[0] : null}</p>

            <ol className="pokemon-stats hidden">
                <li className="pokemon-stat-li">HP : {props.hp}</li>
                <li className="pokemon-stat-li">Attaque : {props.attack}</li>
                <li className="pokemon-stat-li">Défense : {props.defense}</li>
                <li className="pokemon-stat-li">Attaque spéciale : {props.specialAttack}</li>
                <li className="pokemon-stat-li">Défense spéciale : {props.specialDefense}</li>
                <li className="pokemon-stat-li">Vitesse : {props.speed}</li>
            </ol>

        </article>
    )
}

export default Card