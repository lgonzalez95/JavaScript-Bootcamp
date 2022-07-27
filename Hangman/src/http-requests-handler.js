const getPuzzle = async (wordCound) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCound}`, {});

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}

const getCountryDetails = async (countryCode) => {
    const response = await fetch(`https://restcountries.com/v3.1/all`, {});

    if (response.status === 200) {
        const countries = await response.json();
        return countries.find((country) => country.cca2 === countryCode);
    } else {
        throw new Error('Unable to fetch the country')
    }
}

const getLocationInformation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=9126880e9dd389', {});

    if (response.status === 200)
        return response.json();
    else
        throw new Error('Unable to fetch the location information')
}

const getCurrentCountry = async () => {
    const location = await getLocationInformation();
    const country = await getCountryDetails(location.country);
    return country;
}

export { getPuzzle as default }