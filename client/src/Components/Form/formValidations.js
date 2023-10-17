
export const validateName = (name) => {
    const hasNumber = /[0-9]/.test(name);

    if(name.trim()===""){
        return "Please enter an activity's name"
    };
    if(hasNumber){
        return "The activity's name cannot have numbers"
    }
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