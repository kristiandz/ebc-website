import { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Hosting.module.css";

function Hosting() {
    const history = useHistory();

    const tagInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredDiscordTag = tagInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const url = "https://discordapp.com/api/webhooks/603595949117276170/4nl5dZWz3kuojYir0d7r823y0ih931CL5_1aasiBze7kTIsi_ThcJqHwS1GAqoPNhDZl";
        fetch(url,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        content: "<@&419902212030988288> \n**Discord:** " + enteredDiscordTag + "\n**E-Mail:** " + enteredAddress + "\n**Description:** " + enteredDescription
                    })
            }).then(() => { alert("Your request has been submitted"); history.replace("/") })
    }

    return (
        <div className={classes.hosting}>
            <h1>Explicit Bouncers Hosting</h1>
            <h3>For any hosting questions please fill in the form below and we will get back to you as soon as possible.</h3>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="tag">Discord tag</label>
                    <input type="text" required id="tag" placeholder="Example: John#1221" ref={tagInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Mail Address</label>
                    <input type="text" required id="address" placeholder="Example: john@gmail.com" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Briefly describe your needs and requirements</label>
                    <textarea id="description" required rows="5" placeholder="Write about your request like slots, custom mods, database etc." ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Request information</button>
                </div>
            </form>
        </div>
    )
}

export default Hosting;