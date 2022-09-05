import { useState } from "react"
import logo from "../../Assets/images/logo.png"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import links from "./links"
const Navbar = () => {
    const [searchText, setSearchText] = useState("")
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <header className={`main-header section-padding ${toggleMenu ? "navbar-sm-open-margin" : ""}`}>
            <nav className="main-nav">
                <div className="logo">
                    <img src={logo} alt="logo" className="main-nav-logo" />
                </div>
                <div className={`toggle-content-wrap ${toggleMenu ? "show-content" : ""}`}>
                    <ul className="main-nav-list">
                        {links.map((element) => (
                            <li key={element?.id} >
                                <a href={element.att} className="main-nav-item">
                                    {element.name}
                                </a>
                            </li>
                        ))}
                       
                    </ul>
                    <form className="main-nav-form">
                        <input className="main-nav-search" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    </form>
                </div>
                <div className="navbar-toggle-btn">
                    <FontAwesomeIcon icon={faBars} onClick={() => setToggleMenu(toggleMenu ? false : true)} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar