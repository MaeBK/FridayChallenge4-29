// 1 Convert the following function into an arrow function named "arrowMyFunction".
// const myFunction = function (num1, num2) {
//     return num1 + num2;
// };

/* First attempt: no
let myFunction = (num1, num2) => {
    return`${num1} + ${num2}`
};
*/

const arrowMyFunction =  number =>{
    return `${num1} + ${num2}`;
};

//2 Convert the following function into a one-lined arrow function without a return 
//statement (the return is implicit) . Name the function arrowAdd100
//const add100 = function (money) {
//    return money + 100;
// };

/* first attempt: no arrow?????
const add100 = true; 
const money = add100 ? "More Funds!" : "Nothing added"
console.log(money);
*/

var arrowAdd100= money => `You now have ${money}`; console.log(arrowAdd100((this.money) + 100));

// 3 Create an arrow function that takes TWO arguments, a string and a single letter.
// The function will count the number of times the specified letter occurs in the 
// string. **Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4

countLetters = (str, letter) => 
{
 var letterCount = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}
console.log(countLetters('hello my name is John', 'i'));
console.log(countLetters('hello my name is John', 'h'));
console.log(countLetters('we love this city a lot, sometimes', 'e'));