import React, { useState } from "react";
import styles from "./Modal.module.css";

function Modal(props) {
    const [input, setInput] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem("gBooksKey", JSON.stringify(input));
        props.onApiKeySubmit(input);
        setInput("");
    }

    return (
        <div className={styles.overlay}>
        <div className={styles.modal}>
            <h2 className={styles.title}>Enter your Google Books API Key</h2>
            <p className={styles.text}>
                This app runs 100% in your browser — there's no backend or server storing your data.
                To work, it needs access to the <strong className={styles.accent}>Google Books API</strong> using your own API key.
            </p>
            <p className={styles.text}>
                Don't worry: your key is saved only on your device using <strong className={styles.accent}>localStorage</strong> and is never shared.
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} placeholder="Google Books API Key" onChange={({ target }) => setInput(target.value)} />
                <button className={styles.submitButton} type="submit">Submit</button>
            </form>
            <p className={styles.text}>
                👉 Need help creating your API key? Follow this quick guide: <a className={styles.link} href="https://developers.google.com/books/docs/v1/using#APIKey" target="_blank">How to get a Google Books API key</a>
            </p>
        </div>
        </div>
    )
}

export default Modal;
