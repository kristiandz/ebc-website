import classes from "./GenericCard.module.css";

function GenericCard(value) {
    return (
        <div className={classes.genericCard}>
            <img src={value.image} alt="IMG" width="50px" height="50px" />
            <h3>{value.title}</h3>
            <span>{value.description}</span>
        </div>
    );
}

export default GenericCard;