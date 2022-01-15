import ServerStatCard from "../components/statItems/ServerStatCard";
import classes from "./Stats.module.css";
import React, { useState } from 'react';

function Stats() {
    // eslint-disable-next-line
    const [authorizedGUID, setauthorizedGUID] = useState(false);

    return ( 
        <div className={classes.stats}>
            <div className={classes.serverStatsContainer}>
                <h2>Server stats</h2>
                <ServerStatCard title="627" description="Active permanent bans" image="https://img.icons8.com/ios-filled/344/prisoner.png" />
                <ServerStatCard title="201" description="New players" image="https://img.icons8.com/ios-filled/344/personal-growth.png" />
                <ServerStatCard title="913" description="Active players" image="https://img.icons8.com/external-bearicons-glyph-bearicons/344/external-User-essential-collection-bearicons-glyph-bearicons.png" />
                <ServerStatCard title="32" description="Active members" image="https://img.icons8.com/ios-filled/344/meeting-room.png" />
            </div>
            <div className={classes.apiStatsContainer}>
                <h2>API stats</h2>
                <ServerStatCard title="3921" description="Total API calls" image="https://img.icons8.com/ios-filled/344/api.png" />
                <ServerStatCard title="918" description="Ban database calls" image="https://img.icons8.com/ios-filled/344/demand.png" />
                <ServerStatCard title="1228" description="IP validity calls" image="https://img.icons8.com/ios-filled/344/ip-address.png" />
                <ServerStatCard title="1911" description="Evader check calls" image="https://img.icons8.com/ios-filled/344/burglary.png" />
            </div>
            <div className={classes.personalStatsContainer}>
                <h2>Private stats</h2>
                {authorizedGUID ? 
                <div>
                    <h2>Authorized</h2>
                </div> : <h3>Login with discord and connect your game account to view your personal stats</h3> }
                
            </div>
        </div>
     );
}

export default Stats;