# Learning-JS
Learnig Js from Basic to Advanced

"use strict" is used tell to use all js code as modern java code(not older version)

symbol ==> used to make any value unique.  

== equally or >= < > comparison operator has different value of null 

while undefined always give a false.

for that check this :

console.log(null == 0);

console.log(null > 0);

console.log(null >= 0);


console.log(undefined == 0);

console.log(undefined > 0);

console.log(undefined >= 0);

in method of string if any method that expect integer as argument and if you provide NaN,null,undefined, or any other character then it will convert into the 0 by default.

for finding any random number between range a to b inclusive

console.log(Math.floor(math.random() * (b-a+1)) + a)

To print the date in full from including a day and date use tostring method 
Date's typeof is object


console.log(new Date().toString())  ==>   Fri Jul 11 2025 01:21:05 GMT+0530 (India Standard Time)

const arr2 = [1,1,12,44,[4,5,6,[8,8,9,9,10,[5,9,6,3]]]]
const arr1 = arr2.flat(Infinity)
console.log(arr1);

==> in this type of scenario where array contains another array in depth then using flat method we can simply create a new singlw one dimensional array.


Object

using constructor object will be created as singleton , while using literal new object created each time.


Correct Way to Implement Symbol in Js in object

const mysym = Symbol("myKey");  

const obj1 = {
    [mysym] : "ji"
}

console.log(obj1[mysym]);

for destructuring the object

const {name : n} = obj1
console.log(n);

Spread and Rest operator both has same sign ...
based on where we put we decide which one is execute.


IIFE :- Immediately Invoked Function Expressions 
it is basically used for removing pollution of global scope.

(function yag(){
    console.log(`yagnik pansheriya`);
    
})();


( (name) => {
    console.log(`hoooooo ${name}`);
    
})(`yagnik`);


Javascript Exceution Context

==>  Global EC {}
==>  Functional EC
==>  Eval EC

Global Execution Phase

Memeory Creation Phase
    ==> in this part all the variable and function are allocated memory and their value will be undefined.

Execution Phase
    ==> value will be assign to variable
        