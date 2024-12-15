
const mySym = Symbol("Key1")

const Jsuser = {
    Name : "Parikshit",
Age : 21,
 [mySym] : "Key1",
Location: "Wardha",
Email :" Pari@123gmail.com",
isLoggedIn : ["Monday" , "Satuarday"]
}

// console.log(Jsuser["Email"]);
// console.log(Jsuser[mySym]);

Jsuser.Email = "Parikibm"
//Object.freeze(Jsuser)
Jsuser.Email= "dofllsl"
// console.log(Jsuser);


Jsuser.greeting = function(){
    // console.log(" Hello JS User");
    
}
Jsuser.greetingTwo = function(){
    // console.log(` Hello JS User , ${this.Age}`);
    
}
// console.log(Jsuser.greeting());
//  console.log(Jsuser.greetingTwo());


// const tinderUser = new Object()//singleton
const tinderUser = {}//non singleton object

tinderUser.isLoggedIn = "false",
tinderUser.id = "1234"
tinderUser.name =  "Parikshit"

const regularUser = {
    email : "parik",
    fullname  : {
        userFullname : {
            firstName : "Parikshit",
            lastName : "Urkande"

        }
    }
}

console.log(regularUser.fullname.userFullname.firstName);
//? protected by value

const obj = { 1 :"a", 2 :"b"}
const obj1 = { 3 : "c", 4 :"d"}
 
//const obj2 = Object.assign({} ,obj , obj1)
obj2 = {...obj,...obj1}
console.log(obj2);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



