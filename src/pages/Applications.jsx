import classes from "./Applications.module.css";
import { Outlet } from "react-router-dom";

function Applications() {
    return (
        <div className={classes.appContainer}>
            <Outlet />
        </div>
    );
}

export default Applications;