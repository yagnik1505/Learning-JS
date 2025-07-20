Comparisons Operator

< , > , <= , => , == , === (type checking) , != , !==

Differnce Between != and !==
is 
!=  ==> check only value
!==  ==> check value and type both

True Value :- true , 1 , "0" , 'false' , " " (string if not empty then it always true) , function(){} , [] , { } ,     

Falsy value :- false , 0, -0, BigInt 0n ,NaN , null,undefined, ""


For checking array is empty or not


const arr = []

if(arr.length === 0){
    console.log(`empty`);
    
}

for object

const obj = {}

if(Object.keys(obj).length === 0){
    console.log(`empty object`);    
}

Nullish Coalescing Operator(??)

let val = null ?? 10
console.log(val);

it will print 10.

Maps in Javascript

const map = new Map()
map.set("Name","yagnik")
map.set("Age",18)

The for...in loop is specifically designed to iterate over the enumerable properties of plain objects.

The ForEach loop will take input of three variable 

const returnvalue = arr.ForEach( (element,index,array) => {
    Console.log(`simply printing this.`);
})

ForEach Not return anything.

Filter method used to return some elements who passes the condition.

if we use arrow function then for return if we use {} then explicitly have to write return statement while in () or without parenthesis we don't have to write return keyword.

Map Method used perform some operation on array or object then return new array.(remember it will not modified original array).


Chaining of Method (Very Important Topic for Development in any language)

const err = crr.map((num) => num *10).map((num) => num + 1).filter((num) => (num % 2 != 0))

console.log(err);


Reduce Method used to perfrom additon or multiplication on element and return a single value.

const trr = crr.reduce(function (acc,curr){
    console.log(acc , curr);
    
    return acc + curr;
},100)

after parenthesis for intial value we provide it after comma as above mention.

Remember it not modified the orignal array.

