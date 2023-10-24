import {
    FILTER_BY_ACTIVITY,
    FILTER_CONTINENT,
    FILTER_POPULATION,
    GET_ACTIVITIES,
    GET_ALL_COUNTRIES,
    GET_COUNTRY_BY_ID,
    ORDER,
    POST_ACTIVITY,
    SEARCH_BY_NAME,
    DELETE_ACTIVITY
} from "./actions-types";

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

export const getAllActivities = () => {

    return async (dispatch) => {
        try {
            const response = await axios(`http://localhost:3001/activities`);
            const data = response.data;
            dispatch({
                type: GET_ACTIVITIES,
                payload: data
            });
            return data;
        } catch (error) { throw error };
    };
};

export const getCountryById = (id) => {

    return async (dispatch) => {
        try {
            const response = await axios(`http://localhost:3001/countries/${id}`);
            const data = response.data;
            dispatch({
                type: GET_COUNTRY_BY_ID,
                payload: data,
            })
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


export const postActivity = ({ name, difficulty, duration, season, country }) => {
    const endpoint = `http://localhost:3001/activities`;

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

export const deleteActivity = (id) => {
    const endpoint = `http://localhost:3001/activities/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            dispatch({
                type: DELETE_ACTIVITY,
                payload: data
            });
        } catch (error) { throw error };
    };
};


export const orderBYName = (order) => {
    return {
        type: ORDER,
        payload: order
    };
};

export const filterByContinent = (continent) => {
    return {
        type: FILTER_CONTINENT,
        payload: continent
    };
};

export const filterByPopulation = (order) => {
    return {
        type: FILTER_POPULATION,
        payload: order,
    };
};

export const filterByActivity = (order) => {

    return {
        type: FILTER_BY_ACTIVITY,
        payload: order,
    };
};


