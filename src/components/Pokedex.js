import { Fragment, useEffect, useState } from "react";
import Card from "./Card.js"
import Filters from "./Filters.js";
import "../styles/Pokedex.css"

function Pokedex() {

    const [pokemons, setPokemons] = useState([])

    const [sort, setSort] = useState(null)
    const updateSort = (value) => setSort(value)

    const [sortByGeneration, setSortByGeneration] = useState(null)

    const [retro, displayRetro] = useState(false)
    const updateRetro = (value) => displayRetro(value)

    const [stats, displayStats] = useState(false)
    const updateDisplayStats = () => displayStats(!stats)

    const getPokemons = async () => {

        const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon/");
        const data = await response.json();

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
            type2 : [element.apiTypes[element.apiTypes.length -1].name, element.apiTypes[element.apiTypes.length -1].image],
            preEvolution : element.apiPreEvolution,
            evolutions : [...element.apiEvolutions],
            sprite : element.sprite
        }))
    
        setPokemons(pokemonList)    
    }

    const sortPokemons = (sort) => {

        if(Number.isInteger(parseInt(sort))) {

            setPokemons(pokemons.filter(pokemon => pokemon.generation === parseInt(sort)))
        }
    }
/*
    const sortByGeneration = () => {

        return pokemonsToDisplay.filter(pokemon => pokemon.generation === parseInt(sort))
    }
*/
    useEffect(() => {
        getPokemons()
        sortPokemons(sort)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <Fragment>
            <Filters 
                sort={sort} 
                setSort={setSort} 
                stats={stats} 
                displayStats={displayStats}
                retro={retro} 
                displayRetro={displayRetro} 
            />


            <h2>sort = {sort}</h2>
            <h2>retro = {retro}</h2>

            <section className="pokedex">

                {sort === null ? pokemons.map((pokemon) => (
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
                        preEvolution={pokemon.preEvolution}
                        evolutions={pokemon.evolutions}
                        sprite={pokemon.sprite}
                        sort={sort} 
                        setSort={setSort} 
                        stats={stats} 
                        displayStats={displayStats}
                        retro={retro} 
                        showRetroValue={updateRetro} 
                    />
                )) : null}

            </section>
        </Fragment>
    )
}

export default Pokedex