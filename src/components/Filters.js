import "../styles/Filters.css"

function Filters() {

    return (
        <section className="filters">

            <select name="gen" className="gen">
                <option className="0">Afficher toutes les générations</option>
                <option className="gen-1" value="1">Afficher la première génération</option>
                <option className="gen-2" value="2">Afficher la deuxième génération</option>
                <option className="gen-3" value="3">Afficher la troisième génération</option>
                <option className="gen-4" value="4">Afficher la quatrième génération</option>
                <option className="gen-5" value="5">Afficher la cinquième génération</option>
                <option className="gen-6" value="6">Afficher la sixième génération</option>
                <option className="gen-7" value="7">Afficher la septième génération</option>
                <option className="gen-8" value="8">Afficher la huitième génération</option>
            </select>
            
            <button className="btn-stats-displayed">Cacher les statistiques</button>
            <button className="btn-stats-hidden">Afficher les statistiques</button>
            <button className="btn-legendaries">Afficher les pokémons légendaires</button>

            <input name="search" type="search" className="search" placeholder="Rechercher un pokémon" />
            <button type="submit" className="submit">🔎</button>
            <button className="random">Générer une équipe aléatoire</button> 
            <button className="balanced">Générer une équipe équilibrée aléatoire</button>
            <button className="reset">Réinitialiser les filtres</button>
        </section>
    )
}

export default Filters