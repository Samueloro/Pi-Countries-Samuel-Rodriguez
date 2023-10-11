import { GET_ALL_COUNTRIES } from "./actions-types"


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
        default:
            return state;
    }
}

export default reducer;