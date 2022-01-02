import classes from "./ServerItem.module.css"

function ServerItem(props) {

    return (
        <div className={classes.serverItem}>
            <h4>{props.value.title}</h4>
            <div className={classes.serverDetails}>
                <span>{props.value.desc}</span>
                <span>Game: {props.value.game}</span>
                <span>Current map: {props.value.map}</span>
                <span>Current players: {props.value.players}/{props.value.slots}</span>
            </div>
            <div className={classes.serverInfo}>
                <button>View screenshots</button>
                <button>Copy connect info</button>
                <button>Join server</button>
            </div>
        </div>
    )
}

export default ServerItem;