import ApplicationComment from "./ApplicationComment";
import { useState, useRef, useEffect } from "react";
import classes from "./AppealCard.module.css";

function AppealCard(obj) {

    const replyInputRef = useRef();
    const [isShown, setisShown] = useState(false);
    const [isLocked, setisLocked] = useState(false);
    const [appealStatus, setAppealStatus] = useState();
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
            alert("Appeal is locked");
            alert("Appeal status: " + appealStatus);
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

    function acceptAppeal() {
        setAppealStatus("Accepted");
        alert("Accepted the application.");
    }
    function denyAppeal() {
        setAppealStatus("Denied");
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
                        <span className={classes.cardForm}>Appeal ID: </span>
                        <span className={classes.cardData}>{obj.value.id}</span>
                    </div>
                    <div className={classes.votesAndExpand}>
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
                        <span className={classes.cardForm}>GUID: </span>
                        <span className={classes.cardData}>{obj.value.GUID}</span>
                    </div>
                    <div className={classes.cardRow}>
                        <span className={classes.cardForm}>Ban Reason: </span>
                        <span className={classes.cardData}>{obj.value.reason}</span>
                    </div>
                    <div className={classes.cardRow}>
                        <span className={classes.cardForm}>Reason for cheating: </span>
                        <span className={classes.cardData}>{obj.value.banReason}</span>
                    </div>
                    <div className={classes.cardRow}>
                        <span className={classes.cardForm}>Unban reason: </span>
                        <span className={classes.cardData}>{obj.value.unbanReason}</span>
                    </div>
                    <div className={classes.cardRow}>
                        <span className={classes.cardForm}>Additional info: </span>
                        <span className={classes.cardData}>{obj.value.additional}</span>
                    </div>
                    <div className={classes.commentSectionContainer}>
                        {comments.map((element) => { return (<ApplicationComment value={element} key={element.id} />) })}
                        <form className={classes.form} onSubmit={onReply}>
                            <div className={classes.control}>
                                <label htmlFor="comment">Leave your comment for the unban appeal</label>
                                <textarea id="description" required rows="3" placeholder="Write your thoughts about the appeal, why should we accept or deny it" ref={replyInputRef}></textarea>
                            </div>
                            <div className={classes.actions}>
                                <button>Reply</button>
                                <button type="button" onClick={acceptAppeal}>Accept appeal</button>
                                <button type="button" onClick={denyAppeal}>Deny appeal</button>
                                <button type="button" onClick={toggleLock}>{isLocked ? "Unlock appeal" : "Lock appeal"}</button>
                            </div>
                        </form>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default AppealCard;