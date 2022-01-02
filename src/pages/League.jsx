import classes from "./League.module.css";
import LeagueCard from "../components/leagueItems/LeagueCard";
import {useState, useEffect } from "react";

function League() {

    const [bronzeLeague,setBronzeLeague] = useState([]);
    const [silverLeague,setSilverLeague] = useState([]);
    const [goldLeague,setGoldLeague] = useState([]);
    const [proLeague,setProLeague] = useState([]);

    useEffect(() => {
        const getLeagues = async () => {
            const leaguesFromServer = await fetchLeagues();
            setBronzeLeague(leaguesFromServer[0]);
            setSilverLeague(leaguesFromServer[1]);
            setGoldLeague(leaguesFromServer[2]);
            setProLeague(leaguesFromServer[3]);
        }
        getLeagues();
    }, [])

    const fetchLeagues = async () => {
        const resBronze = await fetch("http://localhost:3001/bronze_league");
        const resSilver = await fetch("http://localhost:3001/silver_league");
        const resGold = await fetch("http://localhost:3001/gold_league");
        const resPro = await fetch("http://localhost:3001/pro_league");
        const bronze = await resBronze.json();
        const silver = await resSilver.json();
        const gold = await resGold.json();
        const pro = await resPro.json();
        const league = [bronze,silver,gold,pro];
        return league;
    }

    return (
        <div className={classes.league}>
            <LeagueCard league="Bronze" players={bronzeLeague} />
            <LeagueCard league="Silver" players={silverLeague} />
            <LeagueCard league="Gold" players={goldLeague} />
            <LeagueCard league="Pro" players={proLeague} />
        </div>
    );
}

export default League;