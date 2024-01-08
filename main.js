//https://eloquentjavascript.net/04_data.html


//the video will explain in greater detail wtf is going on

//https://www.youtube.com/watch?v=fEnf9MzeBz0 

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

function readInbetweenTheNumbers(start, finish){
  for (let i = start; i <= finish; i++){
    console.log(i)
  }
}

readInbetweenTheNumbers(1, 4)

//2. 

/**
 Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
**/

function addThemAllUp(array){
  //an array has to be given. the array will have value[0] and value[1]. all the values inbetween must be added together
  let total = 0
  for (let i = array[0]; i <= array[1]; i++){
    total += i
  }
  console.log(total)
  return
  // let total = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // console.log(total);

}

addThemAllUp([1, 10])

//3.

/**
 As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

**/

function showTheNumbers(start, finish, step){
  for (let i = start; i <= finish; i +=step){
    console.log(i)
  }
}
showTheNumbers(1,10,2)

//4.

/**
 Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
**/

//no reverse method is allowed

function reverseArrayIntoNewArray(array){
   let newArray = []
  // for (const element of array){
  //   newArray = array[element].unshift()
  // }

  for (let i = array.length - 1; i >= 0; i-- ){ //without the minus one here, index 0 becomes undefined
    newArray.push(array[i]);
  }
  return newArray
}
console.log(reverseArrayIntoNewArray([5,3,1]))


//5.
//this is a monster that I'll need to break down... cause i don't even know what it is that it's asking of me

/**
 Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument
**/

function arrayToList(array){
  list = null
  for (let i = array.length - 1; i >= 0; i-- ){ //when going backwards, remember to always have that minus one, otherwise undefined will be there
     list = {value: array[i], rest: list};
  }
  return list;
}

console.log(arrayToList([4,6,3]))

//6. 

/**
  Also write a listToArray function that produces an array from a list. 
**/


  function listToArray(list){
    let array = []
    for (let node = list; node; node = node.rest){ //real talk, i have no idea what this even does. as in, i don't even know where to start with taking this apart
      array.push(node.value)
    }
    return array;
  }
console.log(listToArray(arrayToList([10, 20, 30])))
//7.

/**
  Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

**/

//8 

/**
  If you haven’t already, also write a recursive version of nth.
**/