import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
    return (
        <div className={styles.footer}>
            Made by
            <a
                href="https://github.com/sushant-78"
                target="_blank"
                rel="noreferrer"
            >
                {" "}
                Me.
            </a>{" "}
            using this
            <a href="https://covid19api.com/" target="_blank" rel="noreferrer">
                {" "}
                Covid19 api.
            </a>
        </div>
    );
};

export default Footer;
