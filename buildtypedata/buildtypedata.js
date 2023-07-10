var firstname;
var lastname;
var age;
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
