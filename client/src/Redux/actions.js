import { GET_ALL_COUNTRIES, SEARCH_BY_NAME } from "./actions-types"
import axios from 'axios'

export const getAllCountries = () => {
    const endpoint = 'http://localhost:3001/countries'

    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint)
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data,
            });
            return data;
        } catch (error) { throw error }
    }
}

export const searchByname = (name) => {
    const endpoint = `http://localhost:3001/countries/name?name=${name}`
    
    return async (dispatch) =>{
        try {
            const { data } = await axios(endpoint)
            dispatch({
                type: SEARCH_BY_NAME,
                payload: data,
            })
            return data;
        } catch (error) { throw error }
    }
}