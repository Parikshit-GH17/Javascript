const myNums = [ 1 , 2 , 3]

// const myTotal = myNums.reduce(function(acc , currval){
// console.log(`acc : ${acc} and  currval : ${currval}`);

//     return acc + currval
// },1)//Initialisation
const myTotal = myNums.reduce((acc , currval) => acc + currval ,0 )


//console.log(myTotal);

const shoppingCard = [
    {
        itemName : "js course",
        price : 10
            
    },
    {
        itemName : "py course",
        price : 20
    },
 {
        itemName : "javacourse",
        price : 30
            
    }, 
    {
        itemName : "AWs course",
        price : 40
            
    }
]

const pay = shoppingCard.reduce((acc , item)=> acc + item.price,0)
console.log(pay);

