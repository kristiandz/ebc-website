import AchievementCard from "../components/homeItems/AchievementCard";
import GenericCard from "../components/homeItems/GenericCard";
import classes from "./Home.module.css";
import logo from "../assets/ebc_logo.gif"

function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.aboutTop}>
                <div className={classes.aboutTopSideContainer}>
                    <div className={classes.aboutTopImage}></div>
                </div>
                <div className={classes.aboutTopText}>
                    <span>Explicit Bouncers is an online gaming community founded in 2010 by pr1m3. Firstly started as a Croatian community, but grew international very quickly.</span>
                    <span>Through years of hard effort, eBc CodJumper server has reached a reputation of a home for all the CoD CJ lovers.</span>
                    <span>Soon we have decided to expand to more Call of Duty servers, in 2013 we opened Promod and Deathrun servers which quickly became leading servers in Croatia and wider.</span>
                </div>
            </div>
            <div className={classes.aboutBottom}>
                <div className={classes.aboutBottomText}>
                    <span>Explicit Bouncers is nowadays an online gaming community, led by Kreator and JohnFranclin, willing to expand within more games other than CoD4.</span>
                    <span>We provide server hosting services for a very low price. We are an open community to join and we look forward to achieve partnerships with many others while providing our previously stated services.</span>
                </div>
                <div className={classes.aboutBottomSideContainer}>
                    <div className={classes.aboutBottomImage}></div>
                </div>
            </div>
            <div className={classes.statsContainer}>
                <div className={classes.stats}>
                    <AchievementCard title="Owned Servers" stat="5" image="https://cdn-icons-png.flaticon.com/512/31/31988.png" />
                    <AchievementCard title="Global Rank" stat="Top 5" image="https://cdn-icons-png.flaticon.com/512/473/473508.png" />
                    <AchievementCard title="Unique Players" stat="40.000+" image="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
                    <AchievementCard title="Community Members" stat="70+" image="https://icon-library.com/images/member-icon-png/member-icon-png-21.jpg" />
                </div>
                <div className={classes.statsImage}></div>
            </div>
            <div className={classes.info}>
                <h2>What do we offer ?</h2>
                <div className={classes.cardContainer}>
                    <GenericCard title="Stability" description="We offer stable servers with 99.9% uptime year round" image="https://cdn-icons-png.flaticon.com/512/44/44520.png" />
                    <GenericCard title="Performance" description="Capable servers in central Europe with good ping performance" image="http://cdn.onlinewebfonts.com/svg/img_474410.png" />
                    <GenericCard title="Cheat free" description="Fair play, minimal amount of cheaters, advanced methods of catching offenders and their ban evasion" image="https://www.vhv.rs/dpng/d/526-5268984_safe-icon-png-transparent-png.png" />
                    <GenericCard title="Healthy population" description="Someone to play with all day around, or to hang out on our socials" image="https://cdn-icons.flaticon.com/png/512/3127/premium/3127995.png?token=exp=1646051537~hmac=cbb87afceb5be4958b0d209d0c3d2d45" />
                    <GenericCard title="Respect" description="One of our most important goals is respect towards our community, no matter the background" image="https://cdn-icons-png.flaticon.com/512/1189/1189183.png" />
                    <GenericCard title="Aspiring community" description="Great network of talented individuals with strong core values" image="https://www.canlead.net/wp-content/uploads/noun_300371.png" />
                    <GenericCard title="Competitive players" description="Our servers are home to highly skilled players who like a bit of competition in their games" image="https://www.vhv.rs/dpng/d/42-428570_competitive-advantage-clip-art-hd-png-download.png" />
                    <GenericCard title="Jägermeister" description="Plenty" image="https://www.kindpng.com/picc/m/260-2608570_jagermeister-nhl-png-download-jgermeister-logo-transparent-png.png" />
                </div>
            </div>
            <footer>
                <div className={classes.leftSection}>
                    <img src={logo} alt="Logo" width="40" height="30" />
                    <span>Explicit Bouncers Copyright © 2010-2022</span>
                </div>
                <div className={classes.rightSection}>
                    <span>Made with</span>
                    <img src="https://www.pngkey.com/png/full/901-9018966_jagemeister-jagermeister-56.png" alt="Logo" width="10" height="24" />
                    <span>by Kreator</span>
                </div>
            </footer>
        </div>
    )
}

export default Home;