import ApplicationCard from "../applicationItems/ApplicationCard";
import classes from "./CommunityApplications.module.css";
import { useState, useEffect } from "react";

function CommunityApplications() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const getApplications = async () => {
            const applicationsFromServer = await fetchApplications();
            setApplications(applicationsFromServer);
        }
        getApplications();
    }, [])

    const fetchApplications = async () => {
        const res = await fetch("http://localhost:3001/applications");
        const data = await res.json();
        return data;
    }

    const reversedApplications = applications.map(item => item).reverse(); // To display the latest application first

    // Check for status and reder active/inactive applications
    return (
        <div className={classes.container}>
            <h3>Active applications</h3>
            <div className={classes.cardContainer}>
                {reversedApplications.map((element) => { return (<ApplicationCard value={element} key={element.id} />) })}
            </div>
            <h3>Archive</h3>
            <div className={classes.cardContainer}>
                {reversedApplications.map((element) => { return (<ApplicationCard value={element} key={element.id} />) })}
            </div>
        </div>
    );
}

export default CommunityApplications;