// ARRAY

const myArr = [0 , 1 , 2 , 3 , 4 , 5 ,6]
const myHero =["Parikshit" , "Parag" , "Saurabh"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);
// console.log(myHero[0]);

//ARRAY METHODS
 
myArr.push(7)
myArr.pop()
myArr.unshift(1)
myArr.shift(1)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5))

// console.log(myArr);
 

// const newArray = myArr.join
// console.log(myArr)
// console.log(typeof newArray)

// splice slice

console.log("A" ,myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
// console.log("C" , myArr)
console.log(myn2);




 