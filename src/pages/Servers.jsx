import classes from "./Servers.module.css";
import ServerItem from "../components/serverList/ServerItem";

function Servers() {
    return <div className={classes.servers}>
        <h1>Server List</h1>
        <ServerItem />
    </div>
}

export default Servers;