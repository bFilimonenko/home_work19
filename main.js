// 1) Розкласти за цифрами п'ятизначне число і вивести у вхідному порядку, але через пробіл. Приклад:
// 10369
// 1 0 3 6 9
// (використовуємо оператор %)

// 81931
let myNum = 81931;

const fifthNum = myNum % 10; // 1
myNum = (myNum - fifthNum) / 10; // 8193
const fourthNum = myNum % 10; // 3
myNum = (myNum - fourthNum) / 10; // 819
const thirdNum = myNum % 10; // 9
myNum = (myNum - thirdNum) / 10; // 81
const secondNum = myNum % 10; //1
myNum = (myNum - secondNum) / 10; //8
const firstNum = myNum; // 8

console.log(firstNum + ' ' + secondNum + ' ' + thirdNum + ' ' + fourthNum + ' ' + fifthNum);

// 2) За допомогою prompt запитати “ім'я користувача”.
//
// За допомогою alert (або console.log) вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач

const userName = prompt('Enter your name');
console.log(`Hello, ${userName}! How are you?`);

// 3) Дано тризначне число, яке надає користувач, потрібно визначити:
//
//   Чи правда, що всі цифри однакові?
//   Чи є серед цифр цифри однакові?
//  All the numbers are the same
//  You have two identical numbers
//  You don't have the same numbers

const userNumber = parseInt(prompt("Enter your three-digit number"));

const lastDigit = userNumber % 10;

const firstAndSecond = (userNumber - lastDigit) / 10;

const middleDigit = firstAndSecond % 10;
const firstDigit =  (firstAndSecond - middleDigit) / 10;

if (firstDigit === middleDigit && firstDigit === lastDigit) {
  console.log('All the numbers are the same');
} else if (firstDigit === middleDigit || middleDigit === lastDigit || lastDigit === firstDigit) {
  console.log('You have two identical numbers');
} else {
  console.log('You do not have the same numbers');
}


// My practice

// *Refactor this code to use function
// Define function checkDigits
// Function should take number as a parameter
// Function should return a string
// 1. All the numbers are the same
// 2. You have two identical numbers
// 3. You do not have the same numbers
// Call function passing userNumber
// console.log result of the function execution

function checkDigit(initialNumber) {
  const lastDigit = initialNumber % 10;

  const firstAndSecond = (initialNumber - lastDigit) / 10;

  const middleDigit = firstAndSecond % 10;
  const firstDigit = (firstAndSecond - middleDigit) / 10;

  if (firstDigit === middleDigit && firstDigit === lastDigit) {
    return "All the numbers are the same";
  }

  if (firstDigit === middleDigit || middleDigit === lastDigit || lastDigit === firstDigit) {
    return "You have two identical numbers";
  }

  return "You do not have the same numbers";
}

console.log(checkDigit(userNumber));

