import { Fragment, useEffect, useState } from "react";
import Card from "./Card.js"
import Filters from "./Filters.js";
import "../styles/Pokedex.css"

function Pokedex() {

    const [pokemons, setPokemons] = useState([])

    const [sort, setSort] = useState("pokemon/")

    const [sortByGeneration, setSortByGeneration] = useState(null)

    const [retro, displayRetro] = useState(false)
    const [stats, displayStats] = useState(false)
    

    const getPokemons = async () => {

        const response = await fetch(`https://pokebuildapi.fr/api/v1/${sort}`)
        const data = await response.json();

    const flattened = data.flat()     

        const pokemonList = flattened.map((element) => ({
    
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
            type2 : [element.apiTypes[element.apiTypes.length -1].name, element.apiTypes[element.apiTypes.length -1].image],
            preEvolution : element.apiPreEvolution,
            evolutions : [...element.apiEvolutions],
            sprite : element.sprite
        }))
    
        setPokemons(pokemonList)    
    }

    useEffect(() => {
        getPokemons()
    }, [sort])

    return (

        <Fragment>
            <Filters 
                sort={sort} 
                setSort={setSort} 
                stats={stats} 
                displayStats={displayStats}
                retro={retro} 
                displayRetro={displayRetro} 
                sortByGeneration={sortByGeneration}
                setSortByGeneration={setSortByGeneration}
            />

            <section className="pokedex">

                {sortByGeneration === null ? pokemons.map((pokemon) => (
                    <Card key={pokemon.number}
                        {...pokemon}
                        sort={sort} 
                        setSort={setSort} 
                        stats={stats} 
                        displayStats={displayStats}
                        retro={retro}  
                        sortByGeneration={sortByGeneration}
                        setSortByGeneration={setSortByGeneration}
                    />
                )) : null}

            </section>
        </Fragment>
    )
}

export default Pokedex