// Code your solution in this file!
// Returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Returns the last two drivers from an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that returns a function to multiply fares
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Function that doubles a fare
  const fareDoubler = createFareMultiplier(2);
  
  // Function that triples a fare
  const fareTripler = createFareMultiplier(3);
  
  // Function that selects drivers based on a function passed as an argument
  const selectDifferentDrivers = function(arrayOfDrivers, driverSelectorFunction) {
    return driverSelectorFunction(arrayOfDrivers);
  };
  
