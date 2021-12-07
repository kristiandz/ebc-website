import classes from "./ApplicationComment.module.css";

function ApplicationComment(props) {
    return (
        <div className={classes.container}>
            <span className = {classes.comment}>"{props.value.comment}"</span>
            <div className={classes.details}>
                <div className={classes.cardRow}>
                    <span className={classes.cardForm}>Discord Tag: </span>
                    <span className={classes.cardData}>{props.value.tag}</span>
                </div>
                <div className={classes.cardRow}>
                    <span className={classes.cardForm}>Time created: </span>
                    <span className={classes.cardData}>{props.value.time}</span>
                </div>
            </div>
        </div>
    );
}

export default ApplicationComment;