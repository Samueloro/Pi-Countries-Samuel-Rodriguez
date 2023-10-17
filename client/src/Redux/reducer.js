import { FILTER_CONTINENT, FILTER_POPULATION, GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, ORDER, POST_ACTIVITY, SEARCH_BY_NAME } from "./actions-types";


const initialState = {
    allCountries: [],
    country: [],
    activities: [],
    filteredCountries: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: payload,
                filteredCountries: payload,
            };
        case SEARCH_BY_NAME:
            return {
                ...state,
                filteredCountries: payload,
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
            let orderCopy = [...state.filteredCountries];
            if (payload === "All"){
                return{
                    ...state,
                    filteredCountries: state.allCountries,
                }
            }
            if (payload === 'A') {
                orderCopy.sort(
                    (a, b) => a.name.localeCompare(b.name));
            } else if (payload === 'Z') {
                orderCopy.sort(
                    (a, b) => b.name.localeCompare(a.name));
            };
            return {
                ...state,
                filteredCountries: orderCopy,
            }
        case FILTER_CONTINENT:
            if (payload === 'All') {
                return {
                    ...state,
                    filteredCountries: state.allCountries,
                };

            };
            const filterContinent = state.allCountries.filter((country) => country.continent === payload)
            return {
                ...state,
                filteredCountries: filterContinent,
            }
        case FILTER_POPULATION:
            let copy = [...state.filteredCountries];
            if (payload === "All"){
                return{
                    ...state,
                    filteredCountries: state.allCountries,
                }
            }
            if (payload === 'smaller') {
                copy.sort(
                    (a, b) => a.population - b.population
                );
            } else if (payload === 'higher') {
                copy.sort(
                    (a, b) => b.population - a.population
                );
            }
            return {
                ...state,
                filteredCountries: copy,
            };
        default:
            return state;
    }
}

export default reducer;