import axios from "axios";
const apiBaseUrl = "https://api.covid19api.com";

//overall data for "Global"
export const fetchData = async () => {
    try {
        const { data } = await axios.get(apiBaseUrl + "/summary");

        return data;
    } catch (error) {
        console.log(error);
    }
};

//to fetch countries for the countrypicker form.
export const fetchCountryNames = async () => {
    try {
        const { data } = await axios.get(apiBaseUrl + "/countries");
        return data;
    } catch (error) {
        console.log(error);
    }
};

//to fetch data for each country
export const fetchCountryData = async (country) => {
    try {
        const {
            data: { Countries },
        } = await axios.get(apiBaseUrl + "/summary");
        return Countries;
    } catch (error) {
        console.log(error);
    }
};
