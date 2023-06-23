import "../styles/Filters.css"

function Filters(props) {

    const {sort, setSort} = props
    const {sortByGeneration, setSortByGeneration} = props
    const {stats, displayStats} = props
    const {retro, displayRetro} = props

    const resetFilters = () => {
        setSort(null)
        setSortByGeneration(null)
        displayStats(false)
        displayRetro(false)
    }

    return (
        <section className="filters">
            
            <select onChange={(event) => setSortByGeneration(event.target.value)}>
                <option value="null">Afficher toutes les générations</option>
                <option value="1">Afficher la première génération</option>
                <option value="2">Afficher la deuxième génération</option>
                <option value="3">Afficher la troisième génération</option>
                <option value="4">Afficher la quatrième génération</option>
                <option value="5">Afficher la cinquième génération</option>
                <option value="6">Afficher la sixième génération</option>
                <option value="7">Afficher la septième génération</option>
                <option value="8">Afficher la huitième génération</option>
            </select>

            <button onClick={() => displayStats(!stats)} className="stats">{stats ? "Cacher les statistiques" : "Afficher les statistiques"}</button>

            <button onClick={() => setSort("legendaries")} className="btn-legendaries">Afficher les pokémons légendaires</button>

            <input onChange={(event) => setSort(event.target.value)} type="search" className="search" placeholder="Rechercher un pokémon" />
            <button className="submit">🔎</button>

            <button onClick={() => displayRetro(!retro)} className="retro">{retro ? "Quitter le mode rétro 😄" : "Passer en mode Rétro 🕹️"}</button>

            <button onClick={() => setSort("random")} className="random">Générer une équipe aléatoire</button> 
            <button onClick={() => setSort("balanced")} className="balanced">Générer une équipe équilibrée aléatoire</button>

            <button onClick={() => resetFilters()} className="reset">Réinitialiser les filtres</button>
        </section>
    )
}

export default Filters