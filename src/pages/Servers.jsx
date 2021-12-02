import classes from "./Servers.module.css";
import ServerItem from "../components/serverItems/ServerItem";

function Servers() {
  return (
    <div className={classes.servers}>
      <h3>Servers we are currently offering for you to enjoy</h3>
      <hr />
      <div className={classes.itemContainer}>
        <ServerItem />
        <ServerItem />
        <ServerItem />
      </div>
    </div>
  );
}

export default Servers;
