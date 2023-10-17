
export const validateName = (name) => {
    if(name.trim()===""){
        return "Please enter an activity's name"
    };
    return null;
};

export const validateDuration =(duration)=>{
    const durationValue = parseInt(duration);
    if (isNaN(durationValue) || durationValue < 0 || durationValue > 24){
        return "Please enter a valid duration"
    };
    return null;
};

export const validateSeason = (season) => {
    if(season == "--"){
        return "Please select a season"
    }
    return null;
};

export const validateCountry = (selectedCountry) => {
    if(!selectedCountry){
        return "Please select a country"
    };
    return null;
};