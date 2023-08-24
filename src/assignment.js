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

function sumOfNumbersTo(End) {
    let sum = 0;
    for ( let i = 1; i <= End; i++) {
        sum += i;
    }
    return sum;
}

const End = 10;
const sum = sumOfNumbersTo(End);
console.log('The sum of numbers between 1 and $(End) is: $(sum)');
console.log('sum:', sum);

// assignment.sumOfNumbersTo = sumOfNumbersTo;


function countEvenNumbersWithin(array) {
    
    let sum = 0;
    let count = 0;
     for (let numbers of array) {
        if( numbers[i] % 2 === 0){
            count++;
            sum += numbers[i];}
              
        }
        return { count,sum };
    }
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = countEvenNumbersWithin(numbers);

        console.log('Count of even numbers:,${result.count}')
        console.log('Sum of even numbers:,${result.sum}');        
   
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

  function celsiusToFahrenheit(celsius) {
    const farenheit = ( celsius * 9/5) + 32;
    return Math.trunc(farenheit);     //Removing decimal figures using Math.trunc()
  }
  
  const celsiusTemperature = 25.5;
  const farenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log('${celsiusTemperature}C is approx ${farenheitTemperature}');
  
  

// assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================
