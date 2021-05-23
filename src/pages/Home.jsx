import classes from "./Home.module.css";

function Home() {
    return <div className={classes.home}>
        <h2>About us</h2>
        <hr />
        <span>Explicit Bouncers is an online gaming community founded in 2010 by pr1m3. Through years of hard effort, eBc CodJumper server has reached a reputation of a home for all the CoD CJ lovers. In 2013, the eBc team has decided to expand the community with 2 more servers, deathrun and promod. Explicit Bouncers is nowadays an online gaming community, led by Kreator and Soap, willing to expand within more games other than CoD4. We provide server hosting services for a very low price. We are an open community to join and we look forward to achieve partnerships with many others while providing our previously stated services.</span>
        <h2>Achievements</h2>
        <hr />
        <div className={classes.flex}>
            <div>
                <span>5</span>
                <br />
                <span>Owned server</span>
            </div>
            <div>
                <span>Top 10</span>
                <br />
                <span>Global Rank</span>
            </div>
            <div>
                <span>25000+</span>
                <br />
                <span>Unique Players</span>
            </div>
            <div>
                <span>60+</span>
                <br />
                <span>Community Member</span>
            </div>
        </div>
    </div>
}

export default Home;