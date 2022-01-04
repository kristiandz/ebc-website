import classes from "./AchievementCard.module.css";

function AchievementCard(value) {
    return (
        <div className={classes.achievementCard}>
            <div className={classes.boxText}>
                <span>{value.stat}</span>
                <span>{value.title}</span>
            </div>
            <img src={value.image} alt="IMG" width="50px" height="50px" />
        </div>
    );
}

export default AchievementCard;