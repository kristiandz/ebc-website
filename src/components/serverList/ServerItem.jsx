import classes from "./ServerItem.module.css"

function ServerItem() {
    return (
        <div className={classes.serverItem}>
            <h4>Server Title</h4>
            <h5>Short server description</h5>
            <span>Game: </span>
            <span>Current map:</span>
            <span>Players:</span>
            <span>View screenshots..</span>
            <span>Copy connect info to clipboard</span>
            <span>Click for more information..</span>
        </div>
    )
}

export default ServerItem;