// NavBar.jsx
import { NavLink } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return(
        <>
            <header>
                <nav className="topnav">
                    <div className="sitename">
                        
                    </div>

                    <ul>
                        <li className="title-nav">
                            <NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>
                            MainMenu
                            </NavLink>
                        </li>
                        
                        <li>
                        <NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>
                            Home
                        </NavLink>
                        </li>
                        
                        <li>
                        <NavLink to="/about" className={({isActive}) => (isActive ? "active" : "")}>
                            About
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>
                            Contact
                        </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}