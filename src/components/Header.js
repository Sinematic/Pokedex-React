import Nav from "./Nav.js"
import "../styles/Header.css"
import Logo from "../assets/images/logo.svg"

function Header() {

    return ( 
        <header>
            <Nav />
            
            <div className="header">
                <img className="logo" src={Logo} alt="Logo Pokémon" />
                <h1>Pokémon: Gotta Catch' Em All !</h1>
            </div>

        </header>
    )
}

export default Header