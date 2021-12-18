import classes from "./BanAppeals.module.css";
import { useState, useEffect } from "react";
import AppealCard from "../applicationItems/AppealCard";

function BanAppeals() {
    const [banAppeals, setBanAppeals] = useState([]);

    useEffect(() => {
        const getAppeals = async () => {
            const appealsFromServer = await fetchAppeals();
            setBanAppeals(appealsFromServer);
        }
        getAppeals();
    }, [])

    const fetchAppeals = async () => {
        const res = await fetch("http://localhost:3001/appeals");
        const data = await res.json();
        return data;
    }

    const reversedAppeals = banAppeals.map(item => item).reverse(); // To display the latest appeals first

    // Check for status and render active/inactive appeals
    return (
        <div className={classes.container}>
            <h3>Active appeals</h3>
            {reversedAppeals.map((element) => { return (<AppealCard value={element} key={element.id} />) })}
            <h3>Archive</h3>
            {reversedAppeals.map((element) => { return (<AppealCard value={element} key={element.id} />) })}
        </div>
    );
}

export default BanAppeals;