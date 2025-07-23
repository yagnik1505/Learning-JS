
const arr = []

if(arr.length === 0){
    // console.log(`empty`);
    
}

// for object

const obj = {}

if(Object.keys(obj).length === 0){
    // console.log(`empty object`);
    
}

let val = null ?? 10
// console.log(val);
const arr5 = [1,2,23,4]
// this is forof loop
for(let i of arr5){
    // console.log(i);
    
}

const map = new Map()
map.set("Name","yagnik")
map.set("Age",18)

for(const i of map){
    // console.log(i);
}

const ar = [1,5,6,8,2]

for(const p in ar){
    // console.log(ar[p]);
    
}

// For each loop

const brr = [1,2,3,4,5,6,7,8,9,10]

// brr.forEach((x,y,brr) => console.log(x + y + brr))

/* Now start in arr of object
*/

const arrofobj = [
    {
        name : "yagnik",
        age : 18
    },{
        
        name : "Varun",
        age : 19
    },{
        
        name : "Mohit",
        age : 20
    }
]

const ut = arrofobj.forEach( (item) => {
    // console.log(item.name , item.age)
})

// console.log(ut);

/* using Filter */
const fil = brr.filter( (num) => {return num + 3 })

// console.log(fil);

/* using ForEach */

const grap = []

brr.forEach( (num) => {
    if(num > 4){
        grap.push(num)
    }
})

// console.log(grap);

const crr = [1,2,3,4,5,6,7,8,9,10]

const drr = crr.map( (num) => num * 10)

// console.log(crr);

const err = crr.map((num) => num *10).map((num) => num + 1).filter((num) => (num % 2 != 0))

// console.log(err);

const trr = crr.reduce(function (acc,curr){
    // console.log(acc , curr);
    
    return acc * curr;
},100)

console.log(trr);