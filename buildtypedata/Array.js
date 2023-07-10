var firstname;
var lastname;
var age;
function Add(num1, num2) {
    console.log(num1 + num2);
}
var Person = [
    {
        Name: "Mahfuz",
        age: 27
    },
    {
        Name: "Ziadul islam",
        age: 27
    },
    {
        Name: "Misbah-ul Haque",
        age: 27
    },
];
Person.forEach(function (person) {
    console.log("Person name : ".concat(person.Name));
    console.log("Person age : ".concat(person.age));
});
Add(4, 6);
// let userName : String [] = ["User1","User2","User3","User4"]
var userName = ["User1", "User2", "User3", "User4"];
for (var i = 0; i < userName.length; i++) {
    console.log(userName[i]);
}
