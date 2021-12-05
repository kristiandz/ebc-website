import classes from "./Applications.module.css";
import {Outlet, Link} from "react-router-dom";

function Applications() {

    return (
        <div className = {classes.appContainer}>
            <nav className = {classes.navbar}>
                <Link to="community_applications">Community applications</Link>
                <Link to="community_apply">Join the community</Link>
                <Link to="ban_appeals">Ban appeals</Link>
                <Link to="ban_appeal">Appeal a ban</Link>
            </nav>
            <Outlet/>
        </div>
     );
}   

export default Applications;