import React, { useEffect, useState } from "react";
//material ui components
import { FormControl, NativeSelect, Typography } from "@material-ui/core";
//css file
import styles from "./countryPicker.module.css";
//api call
import { fetchCountryNames } from "../../api/apiCalls";

const CountryPicker = (props) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetchCountryNames();
            const listOfCountries = response.map((array) => {
                return array.Country;
            });
            //the list of countries which was received from api, wasn't sorted,
            //so sorted it out, as follows.
            let listOfCountriesLowerCase = [];

            for (const country of listOfCountries) {
                listOfCountriesLowerCase.push(country.toLowerCase());
            }

            listOfCountriesLowerCase.sort(function (a, b) {
                if (a > b) {
                    return 1;
                }
                if (b > a) {
                    return -1;
                }
                return 0;
            });

            setCountries(listOfCountriesLowerCase);
        };
        getData();
    }, []);

    return (
        <div className={styles.container}>
            <Typography variant="h2" className={styles.countryPickerHeading}>
                Pick A Country
            </Typography>
            <FormControl
                onChange={(e) => {
                    props.handleCountryChange(e.target.value);
                }}
            >
                <NativeSelect>
                    <option value="Global">Global</option>
                    {countries.map((country, id) => {
                        return (
                            <option key={id} value={country}>
                                {country}
                            </option>
                        );
                    })}
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default CountryPicker;
