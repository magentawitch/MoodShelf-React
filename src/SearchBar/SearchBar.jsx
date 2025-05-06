import React, { useState } from "react";
import styles from "./SearchBar.module.css"


function SearchBar(props) {
    const [mood, setMood] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleClick = () => {
        if (predefinedMoods.includes(mood.toLowerCase().trim())) {
            setMood(mood.toLowerCase().trim());
            setErrorMessage("");
            props.onSearch(mood);
        } else {
            setErrorMessage("Please input a valid mood from the list: " + predefinedMoods.join(", "));
            setMood("");
        }
        setMood("");
    }

    return (
        <div className={styles.searchBar}>
            <form className={styles.searchBarForm} onSubmit={e => { e.preventDefault(); }}>
                <input type="text" placeholder="Type a mood" className={styles.moodInput} value={mood} onChange={({ target }) => setMood(target.value)} onSubmit={e => { e.preventDefault() }} />
            </form>
            <button id="submit" onClick={handleClick}>Search Books!</button>
            <div>
                <p className={styles.errorMessage}>{errorMessage}</p>
            </div>
        </div>
    )

}



//PREDEFINED MOOD CHECK

const predefinedMoods = [
    "happy", "sad", "excited", "calm", "romantic", "adventurous", "angry",
    "hopeful", "nostalgic", "curious", "motivated", "relaxed", "anxious",
    "lonely", "content", "cheerful", "melancholy", "grateful", "fearful",
    "playful", "energetic", "bored", "inspired", "confident", "sentimental",
    "joyful", "pensive", "giddy", "wistful", "optimistic", "moody", "tranquil",
    "mysterious", "heartbroken", "flirty", "festive", "proud", "restless",
    "imaginative", "cozy", "thoughtful", "determined", "in love", "love"
];


export default SearchBar;