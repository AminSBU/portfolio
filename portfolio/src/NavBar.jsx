import { NavLink } from "react-router-dom";

export default function NavBar()
{
    return(
        <>
            <header>
                <nav className="topnav">
                    <div className="sitename">
                        <NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>
                            MainMenu
                        </NavLink>
                    </div>

                    <ul>
                        <li>
                            <NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}