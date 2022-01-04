import AchievementCard from "../components/homeItems/AchievementCard";
import GenericCard from "../components/homeItems/GenericCard";
import classes from "./Home.module.css";
import logo from "../assets/ebc_logo.gif"

function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.about}>
                <div className={classes.aboutSideContainer}>
                    <div className={classes.aboutImage}></div>
                </div>
                <div className={classes.aboutText}>
                    <span>Explicit Bouncers is an online gaming community founded in 2010 by pr1m3. Through years of hard effort, eBc CodJumper server has reached a reputation of a home for all the CoD CJ lovers.</span>
                    <span>In 2013, the eBc team has decided to expand the community with 2 more servers, deathrun and promod. Explicit Bouncers is nowadays an online gaming community, led by Kreator and JohnFranclin, willing to expand within more games other than CoD4.</span>
                    <span>We provide server hosting services for a very low price. We are an open community to join and we look forward to achieve partnerships with many others while providing our previously stated services.</span>
                </div>
            </div>
            <div className={classes.statsContainer}>
                <div className={classes.stats}>
                    <AchievementCard title="Owned Servers" stat="6" image="https://cdn-icons-png.flaticon.com/512/31/31988.png" />
                    <AchievementCard title="Global Rank" stat="Top 10" image="https://cdn-icons-png.flaticon.com/512/473/473508.png" />
                    <AchievementCard title="Unique Players" stat="35000+" image="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
                    <AchievementCard title="Community Members" stat="65+" image="https://icon-library.com/images/member-icon-png/member-icon-png-21.jpg" />
                </div>
                <div className={classes.statsImage}></div>
            </div>
            <div className={classes.info}>
                <h2>What do we offer ?</h2>
                <div className={classes.cardContainer}>
                    <GenericCard title="Stability" description="We offer stable servers with 99.9% uptime year round" image="https://cdn-icons-png.flaticon.com/512/44/44520.png" />
                    <GenericCard title="Performance" description="Capable servers in central Europe with good ping performance" image="http://cdn.onlinewebfonts.com/svg/img_474410.png" />
                    <GenericCard title="Cheat free" description="Fair play, minimal amount of cheaters, advanced methods of catching offenders and their ban evasion" image="https://www.vhv.rs/dpng/d/526-5268984_safe-icon-png-transparent-png.png" />
                    <GenericCard title="Healthy population" description="Someone to play with all day around, or to hang out on our socials" image="https://image.flaticon.com/icons/png/512/711/711168.png" />
                    <GenericCard title="Respect" description="One of our most important goals is respect towards our community, no matter the background" image="https://cdn-icons-png.flaticon.com/512/1189/1189183.png" />
                    <GenericCard title="Aspiring community" description="Great network of talented individuals with strong core values" image="https://www.canlead.net/wp-content/uploads/noun_300371.png" />
                    <GenericCard title="Competitive players" description="Our servers are home to highly skilled players who like a bit of competition in their games" image="https://www.vhv.rs/dpng/d/42-428570_competitive-advantage-clip-art-hd-png-download.png" />
                    <GenericCard title="Jägermeister" description="Plenty" image="https://www.kindpng.com/picc/m/260-2608570_jagermeister-nhl-png-download-jgermeister-logo-transparent-png.png" />
                </div>
            </div>
            <footer>
                <img src={logo} alt="Logo" width="40" height="30" />
                <span>Explicit Bouncers Copyright © 2010-2022</span>
            </footer>
        </div>
    )
}

export default Home;