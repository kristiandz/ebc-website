import classes from "./ApplicationCard.module.css";
import ApplicationComment from "./ApplicationComment";
import { useState, useRef, useEffect } from "react";

function ApplicationCard(obj) {
    const replyInputRef = useRef();
    const [isShown, setisShown] = useState(false);
    const [isLocked, setisLocked] = useState(false);
    const [applicationStatus, setApplicationStatus] = useState();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const commentsFromServer = await fetchComments();
            setComments(commentsFromServer);
        }
        getComments();
    }, [])

    const fetchComments = async () => {
        const res = await fetch("http://localhost:3001/comments");
        const data = await res.json();
        return data;
    }

    function expandApplication() {
        setisShown(!isShown);
    }

    var currentdate = new Date();
    const time = currentdate.getDate() + "." + (currentdate.getMonth() + 1) + "." + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes();

    async function onReply(event) {
        event.preventDefault();
        if (isLocked) {
            alert("Application is locked");
            alert("Application status: " + applicationStatus);
            return;
        }
        const tag = "kreator#3333"; // Get tag from API
        const comment = replyInputRef.current.value;
        const data = { comment, tag, time };
        setComments([...comments, data]);
        await fetch("http://localhost:3001/comments", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
    }

    function voteYes() {
        alert("Voted Yes");
    }
    function voteNo() {
        alert("Voted No");
    }
    function acceptApplication() {
        setApplicationStatus("Accepted");
        alert("Accepted the application.");
    }
    function denyApplication() {
        setApplicationStatus("Denied");
        alert("Denied the application.");
    }
    function toggleLock() {
        setisLocked(!isLocked);
        alert("Changed the application access.");
    }

    let background = { background: "gray" };
    if (obj.value.status === "Accepted")
        background = { background: "green" };
    else if (obj.value.status === "Denied")
        background = { background: "red" };

    return (
        <div className={classes.cardContainer} >
            <div className={classes.status} style={background}></div>
            <div className={classes.card}>
                <div className={classes.cardSpecial} onClick={expandApplication}>
                    <div className={classes.cardRow}>
                        <span className={classes.cardForm}>Application ID: </span>
                        <span className={classes.cardData}>{obj.value.id}</span>
                    </div>
                    <div className={classes.votesAndExpand}>
                        <div className={classes.votes}>
                            <span>Votes - Yes: </span><span>{obj.value.yes}</span>
                            <span>No: </span><span>{obj.value.no}</span>
                        </div>
                        <div className={classes.votes}><span className={classes.cardExpand}>{"<"}</span></div>
                    </div>
                </div>
                <div className={classes.cardRow}>
                    <span className={classes.cardForm}>Nickname: </span>
                    <span className={classes.cardData}>{obj.value.nick}</span>
                </div>
                <div className={classes.cardRow}>
                    <span className={classes.cardForm}>Discord Tag: </span>
                    <span className={classes.cardData}>{obj.value.tag}</span>
                </div>
                <div className={classes.cardRow}>
                    <span className={classes.cardForm}>Date created: </span>
                    <span className={classes.cardData}>{obj.value.date}</span>
                </div>
                {!isShown ? "" : <div className={classes.toggleSection}> {/* TOGGLE SHOW/HIDE */}
                    <div className={classes.cardRow}>
                        <span className={classes.cardForm}>Real Name: </span>
                        <span className={classes.cardData}>{obj.value.name}</span>
                    </div>
                    <div className={classes.cardRow}>
                        <span className={classes.cardForm}>Age: </span>
                        <span className={classes.cardData}>{obj.value.age}</span>
                    </div>
                    <div className={classes.cardRow}>
                        <span className={classes.cardForm}>In game activity: </span>
                        <span className={classes.cardData}>{obj.value.activity}</span>
                    </div>
                    <div className={classes.cardRow}>
                        <span className={classes.cardForm}>Please tell us about yourself: </span>
                        <span className={classes.cardData}>{obj.value.about}</span>
                    </div>
                    <div className={classes.cardRow}>
                        <span className={classes.cardForm}>Why do you want to join this community: </span>
                        <span className={classes.cardData}>{obj.value.reason}</span>
                    </div>
                    <div className={classes.cardRow}>
                        <span className={classes.cardForm}>How did you hear about us, relations with other members, what could we improve: </span>
                        <span className={classes.cardData}>{obj.value.reputation}</span>
                    </div>
                    <div className={classes.commentSectionContainer}>
                        {comments.map((element) => { return (<ApplicationComment value={element} key={element.id} />) })}
                        <form className={classes.form} onSubmit={onReply}>
                            <div className={classes.control}>
                                <label htmlFor="comment">Leave your comment for the application</label>
                                <textarea id="description" required rows="3" placeholder="Write your thoughts about the application, why should we accept or deny it" ref={replyInputRef}></textarea>
                            </div>
                            <div className={classes.actions}>
                                <button>Reply</button>
                                <button type="button" onClick={voteYes}>Vote Yes</button>
                                <button type="button" onClick={voteNo}>Vote No</button>
                                <button type="button" onClick={acceptApplication}>Accept application</button>
                                <button type="button" onClick={denyApplication}>Deny application</button>
                                <button type="button" onClick={toggleLock}>{isLocked ? "Unlock Application" : "Lock application"}</button>
                            </div>
                        </form>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default ApplicationCard;
