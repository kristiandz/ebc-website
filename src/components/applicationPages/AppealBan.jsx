import classes from "./AppealBan.module.css";

function AppealBan() {
    return ( 
        <div className={classes.appeal}>
        <h1>Ban appeal form</h1>
        <h3>Please use this form to file a ban appeal, we will consider all appeals. Please take your time to write a detailed appeal to increase your chance.</h3>
        <h4>For details on your ban you can try to connect and you will get a screen with details on the ban</h4>
        <form className={classes.form} onSubmit="">
            <div className={classes.control}>
                <label htmlFor="tag">Discord tag</label>
                <input type="text" required id="tag" placeholder="Example: John#1221" />
            </div>
            <div className={classes.control}>
                <label htmlFor="nickname">In game name</label>
                <input type="text" required id="nickname" placeholder="Example: tek9 stevy" />
            </div>
            <div className={classes.control}>
                <label htmlFor="guid">GUID</label>
                <input type="text" required id="guid" placeholder="Write your banned guid here, if you cant find it, its on the ban screen" />
            </div>
            <div className={classes.control}>
                <label htmlFor="reason">What is the reason and when were you banned ?</label>
                <input type="text" required id="activity" placeholder="What have you been banned for and on what date" />
            </div>
            <div className={classes.control}>
                <label htmlFor="about">Why have you cheated ? </label>
                <textarea id="description" required rows="3" placeholder="Provide details on why you have cheated"></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="info">Why should we accept your ban appeal ?</label>
                <textarea id="description" required rows="5" placeholder="Please provide us a reason so we can consider your appeal"></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="reputation">Anything additional you want to add ?</label>
                <textarea id="description" required rows="3" placeholder="You can add your thoughts or additional proof against your ban etc."></textarea>
            </div>
            <div className={classes.actions}>
                <button>Request information</button>
            </div>
        </form>
    </div>
     );
}

export default AppealBan;