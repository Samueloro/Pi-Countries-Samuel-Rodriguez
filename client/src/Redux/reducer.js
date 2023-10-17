import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, ORDER, POST_ACTIVITY, SEARCH_BY_NAME } from "./actions-types";


const initialState = {
    allCountries: [],
    country: [],
    activities: [],
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
        case POST_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, payload]
            }
        case ORDER:
            let orderCopy = [...state.allCountries];
            if (payload === 'A') {
                orderCopy.sort(
                    (a, b) => a.name.localeCompare(b.name));
            } else if (payload === 'Z') {
                orderCopy.sort(
                    (a, b) => b.name.localeCompare(a.name));
            };
            return {
                ...state,
                allCountries:orderCopy,
            }
        default:
            return state;
    }
}

export default reducer;