//https://eloquentjavascript.net/04_data.html

//it VERY quickly and briefly touches big topics.


//an array is a data set used for storing data

/**
 Two ways to get property values in javascript are with dot notation and square brackets
 When using the dot, the word after the dot is the literal name of the property

PROPERTIES

 When using the square bracket, the expression between the brackets is evaluated/ done to get the property name

 So value.x fetches the property of value x, and value[x] tries to evaluate the expression x, and then uses the result converted to a string, as the property name. For the dot notation, numbers cannot be used.

METHODS
Properties that contain functions are generally called methods of the value they belong to. For example, "toUpperCase is a method of a string" 

OBJECTS
One of the ways to create an objet is with curly braces 
ex.

let day1 = { //the day1 is the name of the property

  squirrel: false, //this full line is a property. the squirrel is the property name, and false is the value of said property
    //note, properties are seperated by commas. So it is possible to put more than one property on the same line, it's just more difficult to read

  events: ["work", "touched tree", "pizza", "running"]

MUTABILITY / Mutable

You are able to change and alter objects and arrays. Primitive values are not mutable.

COMPUTER CORRELATION

I think this is data science or to be more broad computer science. 
};

It was a quick note, but when the word "of" is used, it's another way of looping. In the example, it was looping through an array

REST PARAMETER

The rest parameter syntax lets a function accept an indfeinite or infinite number of arguments as an array

for example

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

DESTRUCTURING 

The destructuring assignment lets you unpack values from arrays, properties, or objects into distinct variables

ex 

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]
**/



//1. 

/**
 Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
**/

//2. 

/**
 Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
**/

//3.

/**
 As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
**/