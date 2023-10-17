import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, ORDER, POST_ACTIVITY, SEARCH_BY_NAME } from "./actions-types";
import axios from 'axios';

export const getAllCountries = () => {
    const endpoint = 'http://localhost:3001/countries';

    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint);
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data,
            });
            return data;
        } catch (error) { throw error };
    };
};

export const searchByname = (name) => {
    const endpoint = `http://localhost:3001/countries/name?name=${name}`;

    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint);
            dispatch({
                type: SEARCH_BY_NAME,
                payload: data,
            })
            return data;
        } catch (error) { throw error };
    };
};

export const getCountryById = (id) => {
    const endpoint = `http://localhost:3001/countries/${id}`;

    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint);
            dispatch({
                type: GET_COUNTRY_BY_ID,
                payload: data,
            })
            return data;
        } catch (error) { throw error };
    };
};

export const postActivity = ({ name, difficulty, duration, season, country }) => {
    const endpoint = `http://localhost:3001/activities`

    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, { name, difficulty, duration, season, country });
            dispatch({
                type: POST_ACTIVITY,
                payload: data,
            });
            return data;
        } catch (error) { throw error };
    };
};

export const orderBYName = (order) => {
    return {
        type: ORDER,
        payload: order
    };
};
