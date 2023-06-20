import "../styles/Card.css"

function Card(props) {

    return (
        <article className="pokemon-card" id={"pokemon" + props.pokemonNumber} /*style=order=pokemonNumber*/>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/pokemonNumber.png" alt={props.pokemonName} className="pokemon-img" />
            <h3 className="pokemon-name">{props.pokemonName} {(props.pokemonNumber)}</h3>
            <div className="pokemon-types-div">
                <img src={props.typeURL} alt="Type du Pokémon" className="pokemon-types-img pokemo-duo-types" />
                <img src={props.typeURL} alt="Type du Pokémon" className="pokemon-types-img pokemo-duo-types" />
            </div>
            <p className="pokemon-types">{props.types}</p>
            <ol className="pokemon-stats hidden">
                <li className="pokemon-stat-li">HP : {props.hpValue}</li>
                <li className="pokemon-stat-li">Attaque : {props.attackValue}</li>
                <li className="pokemon-stat-li">Défense : {props.defenseValue}</li>
                <li className="pokemon-stat-li">Attaque spéciale : {props.specialAttackValue}</li>
                <li className="pokemon-stat-li">Défense spéciale : {props.specialDefenseValue}</li>
                <li className="pokemon-stat-li">Vitesse : {props.speedValue}</li>
            </ol>
        </article>
    )
}

export default Card