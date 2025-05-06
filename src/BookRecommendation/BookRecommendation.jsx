import React, { useState, useEffect } from "react";
import { getBookRecommendation } from "../HelperFunctions";
import Loading from "../Loading/Loading";
import styles from "./BookRecommendation.module.css";



function BookRecommendation(props) {
    const [bookRec, setBookRec] = useState([]);
    const [randomListId, setRandomListId] = useState(null)
    const [loading, setLoading] = useState(false);

    const getNewId = () => {
        setRandomListId(Math.floor(Math.random() * bookRec.length));
    }
    useEffect(() => {
        if (props.moodInput !== undefined) {
            setLoading(true);
            getBookRecommendation(props.moodInput).then((data) => {
                props.onDisplay(true);
                setBookRec(data);
                setLoading(false);
                getNewId();
            })
        }
    }, [props.moodInput])

    const newSearch = () => {
        props.onDisplay(false);
        setBookRec([]);
    }

    if (bookRec.length === 0) {
        return (
            <Loading isLoading={loading} />
        )
    } else {

        return (
            <div className={styles.bookRecommendation}>
                <div className={styles.imageContainer}>
                    <img src={bookRec[randomListId].coverImage || "https://placecats.com/g/200/300"} id="bookCover" />
                </div>
                <div className={styles.bookInfo}>
                    <h2 id="bookTitle">{bookRec[randomListId].title || "No title available"}</h2>
                    <h3 id="bookAuthor">{bookRec[randomListId].author || "No Author available"}</h3>
                </div>
                <div className={styles.searchButton}>
                    <button className={styles.newBookButton} onClick={getNewId}>Another Book</button>
                    <button className={styles.newSearchButton} onClick={newSearch}>New Search</button>
                </div>
            </div>
        )
    }
}

export default BookRecommendation;



