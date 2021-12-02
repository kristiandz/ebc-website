import classes from "./CommunityApply.module.css";

function CommunityApply() {
    return ( 
        <div className={classes.applications}>
            <h1>Application form</h1>
            <h3>Please fill in this form if you wish to apply for our community, please take your time to write this, a more detailed application is more likely to be accepted</h3>
            <form className={classes.form} onSubmit="">
                <div className={classes.control}>
                    <label htmlFor="tag">Discord tag</label>
                    <input type="text" required id="tag" placeholder="Example: John#1221" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="name">Real name</label>
                    <input type="text" required id="name" placeholder="Example: John Ford" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="nickname">In game name</label>
                    <input type="text" required id="nickname" placeholder="Example: tek9 stevy" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="age">Age</label>
                    <input type="text" required id="age" placeholder="Example: 21" />
                </div>
                <div className={classes.control}>
                    <label htmlFor="activity">In game activity</label>
                    <input type="text" required id="activity" placeholder="You can write your previous prestige, current prestige, hours played etc." />
                </div>
                <div className={classes.control}>
                    <label htmlFor="about">Please tell us about yourself</label>
                    <textarea id="description" required rows="5" placeholder="Provide some details about yourself, what are you hobbies, interests, education, life goals etc."></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor="reason">Why do you want to join our community ?</label>
                    <textarea id="description" required rows="5" placeholder="Please tell us why do you want to join our community and why should we accept you"></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor="reputation">How did you hear about us, relations with other members, what could we improve ?</label>
                    <textarea id="description" required rows="5" placeholder="How are you relations with other members, what are we doing good, and what could we imrpove in our community, please share your thoughts"></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Request information</button>
                </div>
            </form>
        </div>
     );
}

export default CommunityApply;