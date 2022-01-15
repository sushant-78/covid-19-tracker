import React from "react";
import { Typography } from "@material-ui/core";
import covid19 from "../../resources/images/covid19.svg";
import styles from "./header.module.css";

const header = () => {
    return (
        <div className={styles.header}>
            <Typography variant="h1" className={styles.heading}>
                <span>C</span>
                <img src={covid19} alt="covid-19 tracker" />
                <span>VID-19 TRACKER</span>
            </Typography>
        </div>
    );
};

export default header;
