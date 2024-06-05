console.log("Here is : ", "array")[
  /*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
  (1, 7, 9, 45)
][("str", "alex", "mod")][("the", "fox", "over", "lazy", "dog")];
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var bananaindex = fruits[1];
var tomatoindex = fruits[0];

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var Favfood = [mansaf, chicken, meat, egg, cheese];
var Favsport = [football, basketball, swimming];
var Favmovie = [interstellar, brave, batman, spiderman];
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arr) {
  console.log(arr[0]);
}

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr) {
  console.log(arr[-1]);
}

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9];
console.log(array.pop());
console.log(array.push());
console.log(array.shift());
console.log(array.unshift());
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
array2 = [5, 9, -7, 3.5];
console.log(array2.pop());
console.log(array2.push(2));
console.log(array2.shift());
console.log(array2.unshift());
/*
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(arr) {
  if (arr.length % 2 == 0) {
    var left = arr.length / 2 - 1;
    var right = arr.length / 2;
    console.log(arr[left]);
    console.log(arr[right]);
  } else {
    var mid = Math.floor(arr.length / 2);
    console.log(mid);
  }
}

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ["cat", "ele", "bird"];
animals[3] = "zebra";
animals[4] = "elephant";

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(nums, index) {
  console.log(nums[index]);
}

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(nums) {
  for (i = 0; i < nums.length - 1; i++) {
    console.log(nums[i]);
  }
}

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(nums, val) {
  nums.push(val);
  console.log(nums);
}

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(nums) {
  var counter = 0;
  for (i = 0; i < nums.length; i++) {
    counter += nums[i];
  }
  console.log(counter);
}

function sumArray2(nums) {
  var counter = 0;
  var i = 0;
  while (i < nums.length) {
    counter += nums[i];
    i++;
  }
  console.log(counter);
}

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [5,2,1,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(nums) {
  var min = nums[0];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  console.log(min);
}
function minInArray2(nums) {
  var i = 0;
  var min = nums[0];
  while (i < nums.length) {
    if (nums[i] < min) {
      min = nums[i];
    }
    i++;
  }
  console.log(min);
}

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, elem) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == elem) {
      nums.splice(i, 1);
    }
  }
  console.log(arr);
}
function removeFromArray2(arr, elem) {
  var i = 0;
  while (i < arr.length) {
    if (nums[i] == elem) {
      nums.splice(i, 1);
    }
    i++;
  }
  console.log(arr);
}

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr) {
  var arr2 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      arr2.push(i);
    }
  }
  console.log(arr2);
}
function oddArray2(arr) {
  var arr2 = [];
  i = 0;
  while (i < nums.length) {
    if (arr[i] % 2 == 1) {
      arr2.push(i);
    }
    i++;
  }
  console.log(arr2);
}

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(nums) {
  sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  var avg = sum / nums.length;
  console.log(avg);
}
function aveArray2(nums) {
  sum = 0;
  i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  var avg = sum / nums.length;
  console.log(avg);
}
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(nums) {
  var minstr = nums[0];
  for (i = 0; i < nums.length; i++) {
    if (nums[i].length < minstr.length) {
      minstr = nums[i];
    }
  }
  console.log(minstr);
}
function shorterInArray2(nums) {
  var minstr = nums[0];
  var i = 0;
  while (i < nums.length) {
    if (nums[i].length < minstr.length) {
      minstr = nums[i];
    }
    i++;
  }
  console.log(minstr);
}
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str, chr) {
  counter = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] == chr) {
      counter++;
    }
  }
  console.log(counter);
}

function repeatChar2(str, chr) {
  var i = 0;
  var counter = 0;
  while (i < strings.length) {
    if (str[i] == chr) {
      counter++;
    }
    i++;
  }
  console.log(counter);
}

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
var strings= ["0  /////  ","1    ","2 ////    ","3        ","4 ////  ","5  "]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(strings) {
  var arr = [];
  for (var i = 0; i < strings.length; i++) {
    if (i % 2 === 0 && strings[i].length % 2 == 1) {
      arr.push(strings[i]);
    }
  }
  console(arr);
}

function evenIndexOddLength2(strings) {
  var arr = [];
  var i = 0;
  while (i < strings.length) {
    if (i % 2 === 0 && strings[i].length % 2 !== 0) {
      arr.push(strings[i]);
    }
  }
  console.log(arr);
}
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44**0, 5**1, 4**2, 3**3, 2**4, 10*5]
Ex:      => [1, 5, 16, 27, 16, 100000]
          newarr=[1,5,16]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(nums) {
  var newarr = [];
  for (i = 0; i < nums.length; i++) {
    newarr.push(nums[i] ** i);
  }
  console.log(newarr);
}

function powerElementIndex2(nums) {
  var i = 0;
  var newarr = [];
  while (i < nums.length) {
    newarr.push(nums[i] ** i);
    i++;
  }
  console.log(newarr);
}
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
    index=[0,1,2,3,4,5,6,7,8,9,10,11,12]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(nums) {
  var arr = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0 && i % 2 == 0) {
      arr.push(nums[i]);
    }
  }
  console.log(arr);
}
function evenNumberEvenIndex2(nums) {
  var arr = [];
  var i = 0;
  while (i < nums.length) {
    if (nums[i] % 2 == 0 && i % 2 == 0) {
      arr.push(nums[i]);
    }
    i++;
  }
  console.log(arr);
}
