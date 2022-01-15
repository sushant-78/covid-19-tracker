import React from "react";
//material ui components
import { Grid, Typography } from "@material-ui/core";
//a library to use multiple classes for a single element,needed with module.css.
import cx from "classnames";
//css file
import styles from "./infoCards.module.css";
//a library which counts up the number.
import CountUp from "react-countup";

//renamed Date to date as it was throwing error, error was caused due to scoping,
//Because of how scoping works in JS, the inner-most use of a name is the one that matters.
const InfoCards = ({ data: { TotalConfirmed, Date: date, TotalDeaths } }) => {
    return (
        <Grid container className={styles.container}>
            <Grid item className={cx(styles.infoCard, styles.infectedInfoCard)}>
                <Typography variant="h3">Infected</Typography>
                <Typography variant="h2">
                    <CountUp start={0} end={TotalConfirmed} duration={2.0}>
                        {TotalConfirmed}
                    </CountUp>
                </Typography>
                <Typography variant="h3">
                    {new Date(date).toDateString()}
                </Typography>
                <Typography variant="subtitle1">
                    Number of active cases of covid-19
                </Typography>
            </Grid>

            <Grid item className={cx(styles.infoCard, styles.deathsInfoCard)}>
                <Typography variant="h3">Deaths</Typography>
                <Typography variant="h2">
                    <CountUp start={0} end={TotalDeaths} duration={2.0}>
                        {TotalDeaths}
                    </CountUp>
                </Typography>
                <Typography variant="h3">
                    {new Date(date).toDateString()}
                </Typography>
                <Typography variant="subtitle1">
                    Number of deaths cases of covid-19
                </Typography>
            </Grid>
        </Grid>
    );
};

export default InfoCards;
