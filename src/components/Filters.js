import "../styles/Filters.css"

function Filters(props) {

    const {sort, setSort} = props
    const {search, setSearch} = props
    const {stats, displayStats} = props
    const {retro, displayRetro} = props
    const {setPokemonArray} = props

    const legends = [
        144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 377, 378, 
        379, 380, 381, 382, 383, 384, 480, 481, 482, 483, 484, 485, 
        486, 487, 488, 638, 639, 640, 641, 642, 643, 644, 645, 646,
        716, 717, 718, 772, 773, 785, 786, 787, 788, 791, 792, 800, 
        888, 889, 890, 891, 892, 894, 895, 896, 897, 898
    ]

    const resetFilters = () => {
        setSearch("")
        displayStats(false)
        displayRetro(false)
        setPokemonArray([])
        setSort("pokemon/")
    }

    const handleDisplayLegends = () => {
        setSearch("")
        displayStats(false)
        displayRetro(false)
        setPokemonArray(legends)
        setSort("pokemon/")
    }

    const handleGenerationSort = (event) => {
        setSearch("")
        displayStats(false)
        displayRetro(false)
        setPokemonArray([])
        setSort(event.target.value)
    } 

    
    const handleTypeSort = (event) => {
        setSearch("")
        displayStats(false)
        displayRetro(false)
        setPokemonArray([])
        setSort(event.target.value)
    }

    return (
        <section className="filters">
            
            <select onChange={(event) => handleGenerationSort(event)} value={sort}>
                <option value="pokemon/" >Afficher toutes les générations</option>
                <option value="pokemon/generation/1">Afficher la première génération</option>
                <option value="pokemon/generation/2">Afficher la deuxième génération</option>
                <option value="pokemon/generation/3">Afficher la troisième génération</option>
                <option value="pokemon/generation/4">Afficher la quatrième génération</option>
                <option value="pokemon/generation/5">Afficher la cinquième génération</option>
                <option value="pokemon/generation/6">Afficher la sixième génération</option>
                <option value="pokemon/generation/7">Afficher la septième génération</option>
                <option value="pokemon/generation/8">Afficher la huitième génération</option>
            </select>       

            <button onClick={() => displayStats(!stats)} className="stats">{stats ? "Cacher les statistiques" : "Afficher les statistiques"}</button>
            <button onClick={() => handleDisplayLegends()} className="btn-legendaries">Afficher les pokémons légendaires</button>
            <input onChange={(event) => setSearch(event.target.value)} value={search} type="search" className="search" placeholder="Rechercher un pokémon" />
            <button onClick={() => setSort(`pokemon/${search}`)} className="submit">🔎</button>
            <button onClick={() => displayRetro(!retro)} className="retro">{retro ? "Quitter le mode rétro 😄" : "Passer en mode Rétro 🕹️"}</button>
            <button onClick={() => setSort("random/team")}>Générer une équipe aléatoire</button> 
            <button onClick={() => setSort("random/team/suggest")}>Générer une équipe équilibrée</button>

            {props.types ? 
                <select onChange={(event) => handleTypeSort(event)} className="select-type" value={sort}>

                    <option value="pokemon/">Afficher un type</option>
                    {props.types.map((type) => ( 
                        <option key={type} value={"pokemon/type/" + type}>{type}</option>
                    ))}
                </select> 

            : null}

            <button onClick={() => resetFilters()} className="reset">Réinitialiser les filtres</button>

        </section>
    )
}

export default Filters