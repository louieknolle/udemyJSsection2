'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true; 
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;    //strict mode reserves words that are used/might be used someday in the language


// //FUNCTIONS
// function logger() {
//   console.log('My name is Jonas');
// }

// //Calling/running/invoking the functions
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);

// console.log(fruitProcessor(2,4));


// //Function declaration
// function calcAge1(birthYear) {
//   // const age = 2022- birthYear;
//   // return age;
//   return 2022 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //Function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// }



//Arrow Functions (special form of function expression, value returns implicitly)
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 =calcAge3(1991);
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


//FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
