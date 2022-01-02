import classes from "./Servers.module.css";
import ServerItem from "../components/serverItems/ServerItem";
import { useState, useEffect } from "react";

function Servers() {

  const [servers, setServers] = useState([]);
  
  useEffect(() => {
    const getServers = async () => {
      const servers = await fetchServers();
      setServers(servers);
    }
    getServers();
  }, [])
  
  const fetchServers = async () => {
    const res = await fetch("http://localhost:3001/servers");
    const data = await res.json();
    return data;
  }

  return (
    <div className={classes.servers}>
      <h3>Servers we are currently offering for you to enjoy</h3>
      <hr />
      <div className={classes.itemContainer}>
        {servers.map((element) => { return (<ServerItem value={element} key={element.id} />) })}
      </div>
    </div>
  );
}

export default Servers;
