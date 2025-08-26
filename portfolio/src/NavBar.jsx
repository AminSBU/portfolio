import { NavLink } from "react-router-dom";

export default function NavBar()
{
    return(
        <>
            <header>
                <nav className="topnav">
                    <div className="sitename">
                        <NavLink to="/" end>
                            MainMenu
                        </NavLink>
                    </div>
                </nav>
            </header>
        </>
    );
}