import React, { Component } from "react";
//material ui components
import { CssBaseline, Typography } from "@material-ui/core";
//loading animation
import flowingGradient from "./resources/images/flowingGradient.gif";
//website components
import Header from "./components/Header/header";
import InfoCards from "./components/infoCards/infoCards";
import CountryPicker from "./components/countryPicker/countryPicker";
import Footer from "./components/Footer/footer";
import Chart from "./components/chart/chart";
//api calls
import { fetchCountryData, fetchData } from "./api/apiCalls";
//style file
import styles from "./App.module.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.state = {
            data: null,
            countryData: null,
        };
    }

    async componentDidMount() {
        const { Global } = await fetchData();
        //if data isn't received, then page is reloaded, this is done as the api
        //has set a limit to amount of requests from free user, so, reload is
        //necessary to get the data again.
        if (!Global) {
            window.location.reload();
        } else {
            this.setState({ data: Global });
        }
    }

    async handleCountryChange(selectedCountry) {
        if (selectedCountry === "Global") {
            const { Global } = await fetchData();

            if (!Global) {
                window.location.reload();
            } else {
                this.setState({ data: Global });
            }
        } else {
            const countries = await fetchCountryData();
            const countryData = countries.find((currentCountry) => {
                if (currentCountry.Country.toLowerCase() === selectedCountry) {
                    return currentCountry;
                }
            });

            if (!countryData) {
                window.location.reload();
            } else {
                this.setState({ data: countryData });
            }
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <CssBaseline />

                {this.state.data ? (
                    <div>
                        <Header />
                        <InfoCards data={this.state.data} />
                        <CountryPicker
                            handleCountryChange={this.handleCountryChange}
                        />
                        <Chart data={this.state.data} />
                        <Footer />
                    </div>
                ) : (
                    <div className={styles.loadingScreen}>
                        <img src={flowingGradient} alt="loading animation" />
                        <Typography
                            variant="subtitle1"
                            className={styles.loadingText}
                        >
                            Loading..please wait..
                        </Typography>
                    </div>
                )}
            </div>
        );
    }
}
