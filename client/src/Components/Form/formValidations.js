
export const validateName = (name) => {
    const hasNumber = /[0-9]/.test(name);

    if (name.trim() === "") {
        return "Please enter an activity's name"
    };
    if (hasNumber) {
        return "The activity's name cannot have numbers"
    }
    return null;
};

export const validateDuration = (duration) => {
    const durationValue = Number(duration); 

    if(!duration){
        return "Please enter a valid duration"
    }
    if (isNaN(durationValue)) {
        return "Duration must be a number"
    };
    if(durationValue < 1 || durationValue > 24){
        return "The duration must be between 1 to 24"
    }
    if(!Number.isInteger(durationValue)){
        return "The number must be an integer"
    }
    return null;
};

export const validateSeason = (season) => {
    if (!season || season === '--') {
        return "Please select a season"
    }
    return null;
};

export const validateCountry = (selectedCountries) => {
    if (selectedCountries.length === 0) {
        return "Please select a country"
    };
    return null;
};