const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (multiplier) {
    return function fareMultiplier (a) {
        return multiplier * a
    }
}

// x = createFareMultiplier(16);
// y = createFareMultiplier(1);
// createFareMultiplier(1);
// createFareMultiplier(99);
// createFareMultiplier(1);
// y(78)

const fareDoubler = createFareMultiplier (2)

const fareTripler = createFareMultiplier (3)

function selectDifferentDrivers (dr, returnDrivers) {
    return returnDrivers(dr);
}

