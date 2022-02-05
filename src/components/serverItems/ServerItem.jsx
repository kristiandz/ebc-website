import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./ServerItem.module.css"

function ServerItem(props) {

    const [isShown, setIsShown] = useState(false);

    function showPlayerList() {
        setIsShown(!isShown);
    }

    let background = { background: "lime" };
    if (props.value.status === "active")
        background = { background: "lime" };
    else if (props.value.status === "inactive")
        background = { background: "red" };
        
    return (
        <div className={classes.serverItem}>
            <h4><span className={classes.status} style={background}></span> {props.value.title}</h4>
            <hr />
            <div className={classes.serverDetails}>
                <span>Game: {props.value.game}</span>
                <span>Gametype: {props.value.gametype} </span>
                <span>Map: {props.value.map}</span>
                <span>Current players: {props.value.players}/{props.value.slots}</span>
            </div>
            <hr />
            <div onClick={showPlayerList} className={classes.playerList}>
                {!isShown ? "Click to show playerlist" :
                    <>
                        <div className={classes.attack}>
                            <span className={classes.teamTitle}>Attack:</span>
                            {props.value.attack.map((element) => { return (<span key={element?.id}>{element?.name}</span>)})}
                        </div>
                        <div className={classes.defence}>
                            <span className={classes.teamTitle}>Defence:</span>
                            {props.value.defence.map((element) => { return (<span key={element?.id}>{element?.name}</span>)})}
                        </div>
                    </>
                }
            </div>
            <hr />
            <div className={classes.serverInfo}>
                <button><Link to="#">View screenshots</Link></button>
                <button><Link to="#">Copy connect info</Link></button>
                <button><Link to="#">Join server</Link></button>
            </div>
        </div >
    )
}

export default ServerItem;