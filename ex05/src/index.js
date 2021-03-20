var myPetsArray = [
    {
        animalType: [
            "Dog",
            "Cat",
            "Bird"
        ]
    },
    {
        name: [
            "Pujdo",
            "Maca",
            "Tweety"
        ]
    }
];

function myPetsFunction(pets) {
     var pets = myPetsArray[1].name[1];
     return pets;
};

console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;
