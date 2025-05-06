import React from "react";
import styles from "./Loading.module.css";

function Loading(props) {
    if (props.isLoading) {
        return (
            <div className={`${styles.loading} ${styles.display}`}></div>
        )
    } else {
        return (
            <div className={styles.loading}></div>
        )
    }
    
}

export default Loading;

