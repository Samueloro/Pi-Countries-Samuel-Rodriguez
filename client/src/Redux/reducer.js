import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, SEARCH_BY_NAME } from "./actions-types";


const initialState = {
    allCountries: [],
    country:[],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: payload,
            };
        case SEARCH_BY_NAME:
            return {
                ...state,
                allCountries: payload,
            };
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                country: payload,
            }
        default:
            return state;
    }
}

export default reducer;