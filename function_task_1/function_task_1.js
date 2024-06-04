
// 1
// Write a function named tellFortune that:
// takes 4 arguments: number of children,
// partner's name, geographic location, job title.
// outputs your fortune to the screen like so:
// "You will be a X in Y, and married to Z with N kids."

// Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
// => "You will be a software engineer in Jordan, and married to Alice with 3 kids."


function TellFortune (job_title , geographic_location,partners_name ,number_of_children ){

  console.log('You will be a ' + job_title + 'in '+ geographic_location + ' and married to ' + partners_name + ' with ' + number_of_children+ ' kids ' )
}
TellFortune('software engineer ' , 'jordan' , 'Alice' , '3' )

// 2
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion
// rate of 1 human year to 7 dog years.
// outputs the result to the screen like so:
// "Your doggie is NN years old in dog years!"

// Ex: calculateDogAge(1);
// => "Your doggie is 7 years old in dog years!"


function calculateDogAge(Age) {
  const dogYears = Age * 7;
  console.log(`Your doggie is ${dogYears} years old in dog years!`);
}
calculateDogAge(1);  


// 3
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age 100).
// outputs the result to the screen like so:
// "You will need NN to last you until the ripe old age of X"

// Ex: calculateSupply(30, 3);
// => 'You will need 76650 cups of tea to last you until the ripe old age of 100;
// */


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function called_greet (name ){
  console.log('Hello ' + name  )
}
called_greet('qutipa')


5
// what is the error:

function double(cat) {
  return 2 * cat;
}

function double(a7) {
  return 2 * a7;
}

function double(a = 7) {
  return 2 * a;
}




/*
6
fix these functions:
function double1(x) {
  return 2 * x ;
}

function double2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x) {
  return 2 * x;
}

function double2(x) {
  return 2 * x;
}

function double3(x) {
  return 2 * x;
}


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/


function cube(number) {
  return Math.pow(number, 3); 
}
console.log(cube(2)); 
  
  

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(num1, num2) {
  return console.log ( num1 * num2)
}
multiply(2, 5);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense (age)
{
  if (age >= 20) {
    return "yes you can";
  }
else{
let yearsToWait = 20 - age;
return `please come back after ${yearsToWait} years to get one`;
}
}
console.log(canIGetADrivingLicense(21)); // Output: "yes you can"
console.log(canIGetADrivingLicense(17)); // Output: "please come back after 3 years to get one"
console.log(canIGetADrivingLicense(20)); // Output: "yes you can"

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
    console.log(true)
  } else {
    return false;
    console.log(false)

  }
}

console.log(sameLength("tree", "clue")); // => true

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/


function largerNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(largerNumber(5, 6)); // => 6
console.log(largerNumber(5, 2)); // => 5


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNumber(num1, num2, num3) {
  let smallest = num1;

  if (num2 < smallest) {
    smallest = num2;
  }

  if (num3 < smallest) {
    smallest = num3;
  }

  return smallest;
}

console.log(smallerNumber(40, 10, 20)); // => 6



/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/


function shorterString (air,school,car,by,github){

  let shortest = air;
  if (school.length < shortest.length) {
    shortest = school;
  }
  if (car.length < shortest.length) {
    shortest = car;
  }
  if (by.length < shortest.length) {
    shortest = by;
  } 
   if (github.length < shortest.length) {
    shortest = github;
  }

  return shortest;

}
console.log(shorterString("air", "school", "car", "by", "github")); // => by
console.log(shorterString("air", "school", "caur", "byuu", "github")); // => air

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function shorterString1 (air,school,car,by,github){

  let shortest = air;
  if (school.length > shortest.length) {
    shortest = school;
  }
  if (car.length > shortest.length) {
    shortest = car;
  }
  if (by.length > shortest.length) {
    shortest = by;
  } 
   if (github.length > shortest.length) {
    shortest = github;
  }
  return shortest;
}
console.log(shorterString1("air", "schoool", "car", "by", "github")); // => schoool

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(1)); // => false
console.log(isEven(2)); // => true


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd (number1){

  if(number1 % 2 !== 0){
  return true;
  }

  else {
    return false;
  }
}
  console.log(isOdd(1)); // => true
  console.log(isOdd(2)); // => false
  
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num) {
  if (num < 0) {
    return -num; 
  } else {
    return String ='passed'; 
  }
}
console.log(positive(-5)); // => 5
console.log(positive(1));  // => 0

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName (firstName , lastName){

return firstName + " " + lastName;
}
console.log(fullName('qutipa','arabiyat'))
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average (num1,num2,num3,num4,num5){
  let sum= num1+num2+num3+num4+num5;
  let avg =sum /5 ;
  return avg;
}
console.log(average(1,2,3,4,5))
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
  return Math.random();
}
console.log(randomNumber()); //  0.2278
console.log(randomNumber()); //  0.475
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(randomBetweenNumbers(1, 8));   //  7.2380796583967655
console.log(randomBetweenNumbers(3, 100)); //  95.16451989631149

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty (score){

  if (score >= 95 && score <= 100) {
    return'A';
  }
  else if (score>=85 && score <=94) {
     return'B';
  }    

  else if (score>=70 && score <=84) { 
    return'C';
  }    

  else if (score>=50 && score <=69) { 
    return'D';

  }   
  else{
    return 'F';
  }
}
console.log(scoreInUniversty(96)); // => "A"
console.log(scoreInUniversty(3));  // => "F"

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

// let count = 0;

// function counter() {
//   count++;
//   return count;
// }

// console.log(counter()); // => 1
// console.log(counter()); // => 2
// console.log(counter()); // => 3




/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/


let count = 0;

function counter() {
  count++;
  return count;
}

function resetCounter() {
  const previousCount = count;
  count = 0;
  return `${previousCount} and the counter reset now`;
}

// Examples
console.log(counter());        // => 1
console.log(counter());        // => 2
console.log(counter());        // => 3
console.log(resetCounter());  // => "3 and the counter reset now"
console.log(counter());        // => 1
console.log(counter());        // => 2
console.log(resetCounter());  // => "2 and the counter reset now"
console.log(counter());        // => 1
