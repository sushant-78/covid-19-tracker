import React from "react";
//material ui components
import { Line as LineJS } from "chart.js/auto";
import { Typography } from "@material-ui/core";

//chart.js
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.css";

const Chart = ({
    data: { TotalConfirmed, Date: date, TotalDeaths, Country },
}) => {
    let countryUpperCase;
    if (Country) {
        countryUpperCase = Country.toUpperCase();
    }

    //line chart
    const lineChart = (
        <Line
            data={{
                labels: ["22/01/2020", new Date(date).toLocaleDateString()],
                datasets: [
                    {
                        data: [0, TotalConfirmed],
                        label: "Infected",
                        borderColor: "rgba(0, 0, 255, 0.6)",
                    },
                    {
                        data: [0, TotalDeaths],
                        label: "Deaths",
                        borderColor: "rgba(255, 0, 0, 0.6)",
                    },
                ],
            }}
        />
    );

    //bar chart
    const barChart = (
        <Bar
            data={{
                labels: ["Infected", "Deaths"],
                datasets: [
                    {
                        data: [TotalConfirmed, TotalDeaths],
                        label: "People",

                        backgroundColor: [
                            "rgba(0, 0, 255, 0.6)",
                            "rgba(255, 0, 0, 0.6)",
                        ],
                    },
                ],
            }}
        />
    );

    return (
        <div className={styles.container}>
            {countryUpperCase ? (
                <div>
                    <Typography variant="h3" className={styles.chartName}>
                        {countryUpperCase}
                    </Typography>
                    {barChart}
                </div>
            ) : (
                <div>
                    <Typography variant="h3" className={styles.chartName}>
                        GLOBAL
                    </Typography>
                    {lineChart}
                </div>
            )}
        </div>
    );
};

export default Chart;
