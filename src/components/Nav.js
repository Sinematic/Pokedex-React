import "../styles/Nav.css"
import PokémonLogo from "../assets/images/favicon.ico"
import GitHubLogo from "../assets/images/github.png"
import TwitterLogo from "../assets/images/twitter-icon.svg"

function Nav() {

    return (
        <div className="navbar">
            <nav>
                <h2>Custom Pokédex by Sinematic</h2>
                <ul>
                    <li>
                        <a href="https://pokebuildapi.fr/api/v1">
                            <img src={PokémonLogo} alt="Pokéball" className="nav-logo" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Sinematic/Pokedex-React/blob/main/README.md">
                            <img src={GitHubLogo} alt="GitHub" className="nav-logo" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/SineDev">
                            <img src={TwitterLogo} alt="Twitter" className="nav-logo" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav