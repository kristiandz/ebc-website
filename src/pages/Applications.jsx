import classes from "./Applications.module.css";
import { Outlet, Link, useLocation } from "react-router-dom";

function Applications() {
    const location = useLocation();
    return (
        <div className={classes.appContainer}>
            <Outlet />
        </div>
    );
}

export default Applications;