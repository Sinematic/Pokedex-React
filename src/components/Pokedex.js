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

        if (localStorage.getItem("types") === null) { 

            const response = await fetch(`https://pokebuildapi.fr/api/v1/types`)
            const data = await response.json();

            const objTypes = data.map((data) => data.name)

            localStorage.setItem("types", JSON.stringify(objTypes))
        }
        
        setTypes(JSON.parse(localStorage.getItem("types")))
    }

    const templatePokemon = (pokemonData) => {

        return ({
            name : pokemonData.name,
            number : pokemonData.pokedexId,
            image : pokemonData.image,
            generation : pokemonData.apiGeneration,
            hp : pokemonData.stats.HP,
            attack : pokemonData.stats.attack,
            defense : pokemonData.stats.defense,
            specialAttack : pokemonData.stats.special_attack,
            specialDefense : pokemonData.stats.special_defense,
            speed : pokemonData.stats.speed,
            type1 : [pokemonData.apiTypes[0].name, pokemonData.apiTypes[0].image],
            type2 : [pokemonData.apiTypes[pokemonData.apiTypes.length -1].name, pokemonData.apiTypes[pokemonData.apiTypes.length -1].image],
            preEvolution : pokemonData.apiPreEvolution,
            evolutions : [...pokemonData.apiEvolutions],
            sprite : pokemonData.sprite
        })
    }

    const getPokemons = async () => {

        sort === undefined ? setSort("pokemon/") : console.log("")

        setLoading(true)

        if (sort === "pokemon/") {

            if (JSON.parse(localStorage.getItem("pokemons")) === null) { 

                const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/`)
                const data = await response.json()
        
                setLoading(false)

                const flattened = Array.isArray(data) ? data.flat() : [data]
                const pokemonList = flattened.map((element) => (templatePokemon(element)))
                
                localStorage.setItem("pokemons", JSON.stringify(pokemonList))
                
            } else setLoading(false)

            if (pokemonArray.length === 0) {
                setPokemons(JSON.parse(localStorage.getItem("pokemons")))
                
            } else {
                let tree = JSON.parse(localStorage.getItem("pokemons")).filter(function(pokemon) {
                    return pokemonArray.includes(pokemon.number)
                })

                setPokemons(tree)
            }

        } else {

            try {
                const response = await fetch(`https://pokebuildapi.fr/api/v1/${sort}`)
                const data = await response.json()

                setLoading(false)
    
                const flattened = Array.isArray(data) ? data.flat() : [data]
                const pokemonList = flattened.map((element) => (templatePokemon(element)))
    
                setPokemons(pokemonList)

            } catch {
                setMessage(`Le pokémon "${sort}" n'a pas été trouvé !`)
            }
        }

    }

    useEffect(() => {
        setSort()
        getTypes()
        getPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort, setPokemonArray, message])

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
                {"Loading vaut" + loading}
                {message === null ? pokemons.map((pokemon) => (
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