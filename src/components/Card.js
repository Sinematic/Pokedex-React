import { Fragment } from "react"
import "../styles/Card.css"

function Card(props) {

    return (
        <Fragment>
            {props.isVisible &&  
            
            <article className="pokemon-card" id={props.number} style={{ order: props.number }}>

                <img loading="lazy" src={props.retro ? props.sprite : props.image} alt={props.name} className="pokemon-img" />

                <h3 className="pokemon-name">{props.name} ({(
                    props.number < 10 ? "00" + props.number : (props.number < 100 ? "0" + props.number : props.number))})
                </h3>

                <div className="pokemon-types-div">
                    <img loading="lazy" src={props.type1[1]} alt="Type du Pokémon" className="pokemon-types-img" />
                    {props.type1[0] !== props.type2[0] ? <img src={props.type2[1]} alt="Type du Pokémon" className="pokemon-types-img pokemo-duo-types" /> : null}
                </div>

                <p className="pokemon-types">{props.type1[0]}{props.type1[0] !== props.type2[0] ? " - " + props.type2[0] : null}</p>
                <div className={"generation-badge generation-" + props.generation}>{props.generation}</div>

                {props.stats ? <ol className="pokemon-stats">
                    <li className="pokemon-stat-li">HP : {props.hp}</li>
                    <li className="pokemon-stat-li">Attaque : {props.attack}</li>
                    <li className="pokemon-stat-li">Défense : {props.defense}</li>
                    <li className="pokemon-stat-li">Attaque spéciale : {props.specialAttack}</li>
                    <li className="pokemon-stat-li">Défense spéciale : {props.specialDefense}</li>
                    <li className="pokemon-stat-li">Vitesse : {props.speed}</li>
                </ol> : null}

            </article>}
        </Fragment>
        
        
    )
}

export default Card