import { GET_ALL_COUNTRIES } from "./actions-types"
import axios from 'axios'

export const getAllCountries = ()=>{
    const endpoint = 'http://localhost:3001/countries'

    return async (dispatch) => {
        try {
            const { data } = await axios(endpoint)
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data,
            });
            return data; 
        } catch (error) {throw error}
    }
}