let firstname : string
let lastname : string
let age : number;
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