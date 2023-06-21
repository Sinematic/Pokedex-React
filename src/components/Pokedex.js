import { useEffect, useState } from "react";
import Card from "./Card.js"
import "../styles/Pokedex.css"

function Pokedex() {

    const [pokemons, setPokemons] = useState([])

    const getPokemons = async () => {

        const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon/");
        const data = await response.json();
    
        console.log(data[0])

        const pokemonList = data.map((element) => ({
    
            name : element.name,
            number : element.pokedexId,
            image : element.image,
            generation : element.apiGeneration,
            hp : element.stats.HP,
            attack : element.stats.attack,
            defense : element.stats.defense,
            specialAttack : element.stats.special_attack,
            specialDefense : element.stats.special_defense,
            speed : element.stats.speed,
            type1 : [element.apiTypes[0].name, element.apiTypes[0].image],
            type2 : [element.apiTypes[element.apiTypes.length -1].name, element.apiTypes[element.apiTypes.length -1].image]
        }))
    
        setPokemons(pokemonList)    
    }

    const [sort, setSort] = useState(null)

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <section className="pokedex">

            {pokemons.map((pokemon) => (
                <Card key={pokemon.number}
                    name={pokemon.name}
                    number={pokemon.number}
                    image={pokemon.image}
                    generation={pokemon.generation} 
                    hp={pokemon.hp} 
                    attack={pokemon.attack} 
                    defense={pokemon.defense} 
                    specialAttack={pokemon.specialAttack} 
                    specialDefense={pokemon.specialDefense} 
                    speed={pokemon.speed}
                    type1={pokemon.type1}
                    type2={pokemon.type2}
                />
            ))}
        </section>
    )
}

export default Pokedex