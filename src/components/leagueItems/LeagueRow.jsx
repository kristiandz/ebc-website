import classes from "./LeagueRow.module.css";

function LeageRow({player}) {
    return (
        <>
        <div className={classes.row}>
            <span>{player.id}</span>
            <span>{player.name}</span>
            <span>{player.skill}</span>
        </div>
        <hr />
        </>
    );
}

export default LeageRow;