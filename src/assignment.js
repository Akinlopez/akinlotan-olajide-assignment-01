// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 *
 * If you did Challenge - 1, remove the comment in the line just after this function
 *
 * @param {Number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */

function sumOfNumbersTo(n) {
    let sum = 0;
    for ( let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}

const total = sumOfNumbersTo(10)
console.log(total);


// assignment.sumOfNumbersTo = sumOfNumbersTo;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = countEvenNumbersWithin(numbers);

function countEvenNumbersWithin(numbers) {
    let sum = 0;
    let count = 0;
     let arrayOfEvenNumbers = [];
     for(let i = 0; i < numbers.length; i++) {
        if( numbers[i] % 2 === 0){
            count++;
            sum += numbers[i];}
        }
        return { count, 
            sum,
            arrayOfEvenNumbers};
        }
        console.log('count of even numbers:', result.count);
        console.log('sum of even numbers:', result.sum);
        console.log(arrayOfEvenNumbers);
    

// assignment.countEvenNumbersWithin = countEvenNumbersWithin;

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 *
 * If you did Challenge - 3, remove the comment in the line just after this function
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */

let temperatureInCelsius = [ -28, 0, 22, 45, 53, 67];

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

function convertArrayCelsiusToFarenheit(arrayOfCelsius) {
    const farenheitArray = celsiusArray.map(celsiusToFahrenheit);
    let result = [];
    return  farenheitArray;
}
const temperaturesInFahrenheit = convertArrayCelsiusToFahrenheit(temperaturesInCelsius);

console.log("Temperatures in Celsius:", temperaturesInCelsius);
console.log("Temperatures in Fahrenheit:", temperaturesInFahrenheit);


// The Math.trunc function works on a single number, not on array of numbers

let truncatedTemperatures = temperaturesInFahrenheit.map(Math.trunc);

console.log("Original Temperatures:", temperaturesInFahrenheit);
console.log("Truncated Temperatures:", truncatedTemperatures);

// assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
