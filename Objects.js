
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
    console.log(" Hello JS User");
    
}
Jsuser.greetingTwo = function(){
    console.log(` Hello JS User , ${this.Age}`);
    
}
console.log(Jsuser.greeting());
 console.log(Jsuser.greetingTwo());



