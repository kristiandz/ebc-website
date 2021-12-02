import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assets/logo-white.png"

function MainNavigation() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}><Link to="/"><img src={logo} alt="Logo" width = "80" height="70" /></Link></div>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/servers">Servers</Link>
                    </li>
                    <li>
                        <Link to="/hosting">Hosting</Link>
                    </li>
                    <li>
                        <Link to="/league">League</Link>
                    </li>
                    <li>
                        <Link to="/stats">Stats</Link>
                    </li>
                    <li>
                        <Link to="/applications">Applications</Link>
                    </li>
                    <li>
                        <Link to="/panel">Panel</Link>
                    </li>
                </ul>
            </nav>
        </header >
    );
}

export default MainNavigation;