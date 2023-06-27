import "../styles/Filters.css"

function Filters(props) {

    const {sort, setSort} = props
    const {search, setSearch} = props
    const {stats, displayStats} = props
    const {retro, displayRetro} = props

    const resetFilters = () => {
        setSort("pokemon/")
        setSearch("")
        displayStats(false)
        displayRetro(false)
    }

    return (
        <section className="filters">
            
            <select onChange={(event) => setSort(event.target.value)}>
                <option value="pokemon/">Afficher toutes les générations</option>
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
            <button onClick={() => setSort("legendaries")} className="btn-legendaries">Afficher les pokémons légendaires</button>
            <input onChange={(event) => setSearch(event.target.value)} value={search} type="search" className="search" placeholder="Rechercher un pokémon" />
            <button onClick={() => setSort(`pokemon/${search}`)} className="submit">🔎</button>
            <button onClick={() => displayRetro(!retro)} className="retro">{retro ? "Quitter le mode rétro 😄" : "Passer en mode Rétro 🕹️"}</button>
            <button onClick={() => setSort("random/team")} className="random">Générer une équipe aléatoire</button> 
            <button onClick={() => setSort("random/team/suggest")} className="balanced">Générer une équipe équilibrée</button>
            <button onClick={() => resetFilters()} className="reset">Réinitialiser les filtres</button>

            {props.types ? <select onChange={(event) => setSort(event.target.value)} className="select-type">
                <option value="pokemon/">Afficher un type</option>
                {props.types.map((type) => ( 
                    <option key={type[0]} value={"pokemon/type/" + type}>{type}</option>
                ))}
                </select> : null}

        </section>
    )
}

export default Filters