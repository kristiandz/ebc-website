import classes from "./AppealBan.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AppealBan() {

    const history = useNavigate();
    const discordTagInputRef = useRef();
    const nicknameInputRef = useRef();
    const GUIDInputRef = useRef();
    const banReasonInputRef = useRef();
    const reasonInputRef = useRef();
    const unbanReasonInputRef = useRef();
    const additionalInputRef = useRef();
    var currentdate = new Date(); 
    const date = currentdate.getDate()+"."+(currentdate.getMonth()+1)+"."+currentdate.getFullYear();
    const status = "Open";

    const onSubmit = async (event) => {
        event.preventDefault();
        //const tag = // Get discord tag from oauth api
        const discordTag = discordTagInputRef.current.value;
        const nick = nicknameInputRef.current.value;
        const GUID = GUIDInputRef.current.value;
        const banReason = banReasonInputRef.current.value;
        const reason = reasonInputRef.current.value;
        const unbanReason = unbanReasonInputRef.current.value;
        const additional = additionalInputRef.current.value;
        const banAppeal = {date,discordTag,nick,GUID,banReason,reason,unbanReason,additional,status};
        await fetch("http://localhost:3001/appeals",{
            method: "POST",
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(banAppeal)
        }).then(() => { alert("Your ban appeal has been submitted. You are being redirected to the ban appeals tab"); history("/applications/ban_appeals")})
    }

    return ( 
        <div className={classes.appeal}>
        <h1>Ban appeal form</h1>
        <h3>Please use this form to file a ban appeal, we will consider all appeals. Please take your time to write a detailed appeal to increase your chance.</h3>
        <h4>For details on your ban you can try to connect and you will get a screen with details on the ban</h4>
        <form className={classes.form} onSubmit={onSubmit}>
            <div className={classes.control}>
                <label htmlFor="discordTag">Discord tag</label>
                <input type="text" required id="discordTag" placeholder="Example: John#1221" ref={discordTagInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="nickname">In game name</label>
                <input type="text" required id="nickname" placeholder="Example: tek9 stevy" ref={nicknameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="guid">GUID</label>
                <input type="text" required id="guid" placeholder="Write your banned guid here, if you cant find it, its on the ban screen" ref={GUIDInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="reason">What is the reason and when were you banned ?</label>
                <input type="text" required id="ban_reason" placeholder="What have you been banned for and on what date" ref={banReasonInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="about">Why have you cheated ? </label>
                <textarea id="reason" required rows="3" placeholder="Provide details on why you have cheated" ref={reasonInputRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="info">Why should we accept your ban appeal ?</label>
                <textarea id="unban_reason" required rows="5" placeholder="Please provide us a reason so we can consider your appeal" ref={unbanReasonInputRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="reputation">Anything additional you want to add ?</label>
                <textarea id="additional" required rows="3" placeholder="You can add your thoughts or additional proof against your ban etc." ref={additionalInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Request information</button>
            </div>
        </form>
    </div>
     );
}

export default AppealBan;