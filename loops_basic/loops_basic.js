// 1- Write a program that prints numbers from 1 to 10 using a for loop.


// for(i=1;i<=10;i++){
//     console.log(i)};
// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.

// for(let o=0;o<=10; o+=2) {

//     console.log(o)};


// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.

// for(let o=1;o<=10; o+=2) {

//     console.log(o)};


// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

    // for (let i = 1; i <= 10; i++) {
    //     console.log(i + " * " + i + " = " + (i * i));
    // }


// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.


// let sum = 0;
// let number = 1;

// while (number <= 100) {
//     sum += number; 
//     number++; 
// }
// document.write("The sum of numbers from 1 to 100 is: " + sum);




// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.

// const number = parseInt(prompt("Please enter a number to calculate its factorial: "));

// if (isNaN(number) || number < 0) {
//     console.log("Please enter a positive integer.");
// } else {
//     let factorial = 1;

//     for (let i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     console.log("The factorial of " + number + " is: " + factorial);
// }

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.

// const limit = parseInt(prompt("Please enter a number to generate Fibonacci series up to: "));

// let num1 = 0;
// let num2 = 1;

// console.log("Fibonacci series up to " + limit + ":");
// console.log(num1);
// console.log(num2);

// while (num1 + num2 <= limit) {
//     let nextNum = num1 + num2;
//     console.log(nextNum); 
//     num1 = num2; 
//     num2 = nextNum; 
// }

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.


const numbers = [5, 10, 15, 20];

let i = numbers.length - 1;
console.log("Reversed numbers:");
while (i >= 0) {
    console.log(numbers[i]);
    i--;
}
