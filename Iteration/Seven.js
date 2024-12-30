const myNums = [ 1 , 2 , 3 , 4 , 5 , 6  , 7 , 8 , 9 , 10]

//const newNums = myNums.filter( (num) => num / 2)  // if scope is added then we have to add the return value
      
let newNums = myNums
                .map( (num) => num  + 10)
                 .map( (num) => num + 1 )
                 .filter((val) => val >= 16) // true or false
console.log(newNums);
