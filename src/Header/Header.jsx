import React from "react";
import styles from "./Header.module.css";

function Header() {
    return (
        <header>
            <div className={styles.logoContent}>
                <a href="index.html" className={styles.logo}>Mood<span className={styles.accent}>Shelf</span></a>
            </div>
        </header>
    )
}

export default Header;

