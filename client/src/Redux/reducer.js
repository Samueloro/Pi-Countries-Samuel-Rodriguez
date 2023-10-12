import { GET_ALL_COUNTRIES, SEARCH_BY_NAME } from "./actions-types"


const initialState = {
    allCountries: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: payload,
            };
        case SEARCH_BY_NAME:
            return{
                ...state, 
                allCountries: payload,
            }    
        default:
            return state;
    }
}

export default reducer;