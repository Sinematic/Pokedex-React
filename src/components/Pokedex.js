import { Fragment, useEffect, useState } from "react";
import Card from "./Card.js"
import Filters from "./Filters.js";
import Error from "./Error.js";
import "../styles/Pokedex.css"

function Pokedex() {

    const [message, setMessage] = useState(null)
    const [pokemons, setPokemons] = useState([])
    const [sort, setSort] = useState("pokemon/")
    const [search, setSearch] = useState("")
    const [retro, displayRetro] = useState(false)
    const [stats, displayStats] = useState(false)
    const [types, setTypes] = useState([])

    const getTypes = async () => {

        const response = await fetch(`https://pokebuildapi.fr/api/v1/types`)
        const data = await response.json();
        setTypes(data.map((data) => data.name))
    }

    const getPokemons = async (bool=true) => {

        try {
            const response = await fetch(`https://pokebuildapi.fr/api/v1/${sort}`)
            const data = await response.json();
/*
            const evo = [[data[132].apiPreEvolution], data[132].apiEvolutions].flat()
            const evoherbi = [[data[2].apiPreEvolution], data[2].apiEvolutions].flat()

            console.log(evo)
            console.log(evoherbi)
*/
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
        
            bool ? setPokemons(pokemonList) : setPokemons([...pokemonList])

        } catch {
            setPokemons([])
            setMessage("Aucun Pokémon n'a été trouvé !")
        }

    } 

    useEffect(() => {
        setSort()
        getTypes()
        getPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                search={search}
                setSearch={setSearch}
                types={types}
            />

            <section className="pokedex">
                {pokemons.length ? pokemons.map((pokemon) => (
                    <Card key={pokemon.number}
                        {...pokemon}
                        sort={sort} 
                        setSort={setSort} 
                        stats={stats} 
                        displayStats={displayStats}
                        retro={retro}
                        isVisible={true}
                    />
                )) : <Error message={message} setMessage={setMessage} />}

            </section>
        </Fragment>
    )
}

export default Pokedex