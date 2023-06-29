import { Fragment, useEffect, useState } from "react";
import Card from "./Card.js"
import Filters from "./Filters.js";
import Error from "./Error.js";
import "../styles/Pokedex.css"

function Pokedex() {

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)
    const [pokemons, setPokemons] = useState([])
    const [sort, setSort] = useState("pokemon/")
    const [search, setSearch] = useState("")
    const [retro, displayRetro] = useState(false)
    const [stats, displayStats] = useState(false)
    const [types, setTypes] = useState([])
    const [pokemonArray, setPokemonArray] = useState([])

    const getTypes = async () => {

        const response = await fetch(`https://pokebuildapi.fr/api/v1/types`)
        const data = await response.json();
        setTypes(data.map((data) => data.name))
    }

    const getPokemons = async () => {

        try {

            setLoading(true)

            const response = await fetch(`https://pokebuildapi.fr/api/v1/${sort}`)
            const data = await response.json();

            setLoading(false)

            const flattened = Array.isArray(data) ? data.flat() : [data]

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
        

            if (pokemonArray.length === 0) {
                setPokemons(pokemonList)

            } else {

                let tree = pokemonList.filter(function(pokemon) {
                    return pokemonArray.includes(pokemon.number)
                })

                setPokemons(tree)
            }

        } catch(error) {
            
            setMessage(error)
        }

    } 

    useEffect(() => {
        setSort()
        getTypes()
        getPokemons()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort, setPokemonArray])

    return (

        <Fragment>
            <Filters
                sort={sort} 
                setSort={setSort} 
                stats={stats} 
                displayStats={displayStats}
                retro={retro} 
                displayRetro={displayRetro}
                search={search}
                setSearch={setSearch}
                types={types}
                pokemonArray={pokemonArray}
                setPokemonArray={setPokemonArray}
            />

            <section className="pokedex">
                {pokemons.length || loading ? pokemons.map((pokemon) => (
                    <Card key={pokemon.number}
                        {...pokemon}
                        sort={sort} 
                        setSort={setSort} 
                        stats={stats} 
                        displayStats={displayStats}
                        retro={retro}
                        pokemonArray={pokemonArray}
                        setPokemonArray={setPokemonArray}
                    />
                )) : <Error message={message} setMessage={setMessage} />}

            </section>
        </Fragment>
    )
}

export default Pokedex