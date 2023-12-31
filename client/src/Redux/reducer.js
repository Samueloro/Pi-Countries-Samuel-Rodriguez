import {
    DELETE_ACTIVITY,
    FILTER_BY_ACTIVITY,
    FILTER_CONTINENT,
    FILTER_POPULATION,
    GET_ACTIVITIES,
    GET_ALL_COUNTRIES,
    GET_COUNTRY_BY_ID,
    ORDER,
    POST_ACTIVITY,
    SEARCH_BY_NAME,
} from "./actions-types";


const initialState = {
    allCountries: [],
    filteredCountries: [],
    country: [],

    activities: [],
    allActivities: [],

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
                activities: payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities: payload
            }
        case DELETE_ACTIVITY:

            const filterActivities = state.allActivities.filter(act => act.id  !== payload);
            return {
                ...state, 
                allActivities: filterActivities
            }
        case ORDER:
            const orderCopy = [...state.filteredCountries];
            if (payload === "All") {
                return {
                    ...state,
                    filteredCountries: state.filteredCountries
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
            if (payload === "All") {
                return {
                    ...state,
                    filteredCountries: state.filteredCountries
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
            }
        case FILTER_BY_ACTIVITY:
            if (payload === "All") {
                return {
                    ...state,
                    filteredCountries: state.allCountries
                }
            }
            if (payload === "Has") {
                const filterActivity = state.allCountries.filter((country) => country.Activities.length > 0)
                return {
                    ...state,
                    filteredCountries: filterActivity,
                };
            };
            if (payload === "Without") {
                const filterActivity = state.allCountries.filter((country) => country.Activities.length === 0)
                return {
                    ...state,
                    filteredCountries: filterActivity,
                };
            };
        default:
            return state;
    }
}

export default reducer;