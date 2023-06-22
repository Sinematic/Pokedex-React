import { useState } from "react"
import "../styles/Filters.css"

function Filters() {

    const [sort, setSort] = useState(null)

    const handleSelectValue = (event) => {
        const value = event.target.value
        setSort(value)
    }

    const [displayedStats, setDisplayedStats] = useState(false)

    return (
        <section className="filters">
            
            <select value={sort} onChange={handleSelectValue}>
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

            {displayedStats ? <button onClick={() => setDisplayedStats(false)} className="btn-stats-displayed">Cacher les statistiques</button> : null}
            {!displayedStats ? <button onClick={() => setDisplayedStats(true)} className="btn-stats-hidden">Afficher les statistiques</button> : null}

            <button onClick={() => setSort("legendaries")} className="btn-legendaries">Afficher les pokémons légendaires</button>

            <input onChange={handleSelectValue} type="search" className="search" placeholder="Rechercher un pokémon" />
            <button className="submit">🔎</button>
            <button onClick={() => setSort("random")} className="random">Générer une équipe aléatoire</button> 
            <button onClick={() => setSort("balanced")} className="balanced">Générer une équipe équilibrée aléatoire</button>
            <button onClick={() => setSort(null)} className="reset">Réinitialiser les filtres</button>
        </section>
    )
}

export default Filters