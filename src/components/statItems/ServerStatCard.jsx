import classes from "./ServerStatCard.module.css"
function ServerStatCard(value) {
    return (
        <div className={classes.statCard}>
            <div className={classes.imageContainer}>
                <img src={value.image} alt="" width="60px" height="60px"/>
            </div>
            <div className={classes.infoContainer}>
                <h2>{value.title}</h2>
                <span>{value.description}</span>
            </div>
        </div>
    );
}

export default ServerStatCard;