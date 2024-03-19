// index.js

// Function to return the first two drivers from the passed-in array
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};

// Function to return the last two drivers from the passed-in array
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};

// Array containing the returnFirstTwoDrivers and returnLastTwoDrivers functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier
const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return fare * multiplier;
    };
};

// Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on the provided function
const selectDifferentDrivers = (drivers, func) => {
    return func(drivers);
};

// Exporting functions for testing
module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};
