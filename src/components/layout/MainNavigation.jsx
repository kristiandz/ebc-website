import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assets/logo-white.png"

function MainNavigation() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}><Link to="/"><img src={logo} alt="Logo" width="67" height="60" /></Link></div>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/servers">Servers</Link></li>
                    <li><Link to="/hosting">Hosting</Link></li>
                    <li><Link to="/league">League</Link></li>
                    <li><Link to="/stats">Stats</Link></li>
                    <li className={classes.dropdown}>
                        <Link to="/applications/community_applications">Applications</Link>
                        <div className={classes.dropdownContent}>
                            <Link to="/applications/community_applications">Community applications</Link>
                            <Link to="/applications/community_apply">Join the community</Link>
                            <Link to="/applications/ban_appeal">Appeal a ban</Link>
                            <Link to="/applications/ban_appeals">Ban appeals</Link>
                        </div></li>
                    <li><Link to="/panel">Panel</Link></li>
                </ul>
            </nav>
        </header >
    );
}

export default MainNavigation;