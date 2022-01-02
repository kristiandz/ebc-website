import classes from "./LeagueCard.module.css";
import LeagueRow from "./LeagueRow";

function LeagueCard({ league, players }) {
    return (
        <div className={classes.leagueCard}>
            <div className={classes.header}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2176px-Five-pointed_star.svg.png" alt="IMG" height="20px" width="20px" />
                <span>{league} League</span>
            </div>
            <div className={classes.content}>
                <div className={classes.row}>
                    {players.map((element) => { return (<LeagueRow player={element} key={element.id} />) })}
                </div>
            </div>
        </div>
    );
}

export default LeagueCard;