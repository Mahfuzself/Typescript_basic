let firstname : string
let lastname : string
let age : number;
function Add(num1 : number, num2 : number){
   console.log(num1 + num2)
}
const Person = [
    {
        Name :"Mahfuz",
        age : 27
    },
    {
        Name : "Ziadul islam",
        age : 27
    },
    {
        Name : "Misbah-ul Haque",
        age : 27
    },
]
Person.forEach(person => {
    console.log(`Person name : ${person.Name}`)
    console.log(`Person age : ${person.age}`)
});
Add(4,6)
// let userName : String [] = ["User1","User2","User3","User4"]
let userName : Array<string> = ["User1","User2","User3","User4"]
for(let i = 0; i < userName.length;i++){
    console.log(userName[i])
}

