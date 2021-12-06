import classes from "./CommunityApply.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function CommunityApply() {
    const history = useNavigate();
    const nameInputRef = useRef();
    const nicknameInputRef = useRef();
    const ageInputRef = useRef();
    const activityInputRef = useRef();
    const aboutInputRef = useRef();
    const reasonInputRef = useRef();
    const reputationInputRef = useRef();
    
    var currentdate = new Date(); 
    const date = currentdate.getDate()+"."+(currentdate.getMonth()+1)+"."+currentdate.getFullYear();
    const status = "Open";

    const onSubmit = async (event) => {
        event.preventDefault();
        //const tag = // Get discord tag from oauth api
        const name = nameInputRef.current.value;
        const nick = nicknameInputRef.current.value;
        const age = ageInputRef.current.value;
        const activity = activityInputRef.current.value;
        const about = aboutInputRef.current.value;
        const reason = reasonInputRef.current.value;
        const reputation = reputationInputRef.current.value;
        const application = {date,yes:0,no:0,name,nick,age,activity,about,reason,reputation,status};
        await fetch("http://localhost:3001/applications",{
            method: "POST",
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(application)
        }).then(() => { alert("Your application has been submitted. You are being redirected to the applications tab"); history("/applications/community_applications")})
    }

    return ( 
        <div className={classes.applications}>
            <h1>Application form</h1>
            <h3>Please fill in this form if you wish to apply for our community, please take your time to write this, a more detailed application is more likely to be accepted</h3>
            <form className={classes.form} onSubmit={onSubmit}>
                <div className={classes.control}>
                    <label htmlFor="name">Real name</label>
                    <input type="text" required id="name" placeholder="Example: John Ford" ref={nameInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="nickname">In game name</label>
                    <input type="text" required id="nickname" placeholder="Example: tek9 stevy" ref={nicknameInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="age">Age</label>
                    <input type="text" required id="age" placeholder="Example: 21" ref={ageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="activity">In game activity</label>
                    <input type="text" required id="activity" placeholder="You can write your previous prestige, current prestige, hours played etc." ref={activityInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="about">Please tell us about yourself</label>
                    <textarea id="description" required rows="5" placeholder="Provide some details about yourself, what are your hobbies, interests, education, life goals etc." ref={aboutInputRef}></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor="reason">Why do you want to join our community ?</label>
                    <textarea id="description" required rows="5" placeholder="Please tell us why do you want to join our community and why should we accept you" ref={reasonInputRef}></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor="reputation">How did you hear about us, relations with other members, what could we improve ?</label>
                    <textarea id="description" required rows="5" placeholder="How are you relations with other members, what are we doing good, and what could we imrpove in our community, please share your thoughts" ref={reputationInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Request information</button>
                </div>
            </form>
        </div>
     );
}

export default CommunityApply;