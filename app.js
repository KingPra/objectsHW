console.log('Homework');

/*
let traveler = {  
        name: "Jose",
        food: 100,
        isHealthy: true,    
};
*/

/*

let wagon = {
        passengers:[],
        capacity: 5,
}; console.log(wagon);
*/


let wagon1 = makeWagon(5);
let traveler = makeTraveler('Henrietta');
let traveler2 = makeTraveler('Juan');
console.log(traveler);
//hunt(traveler);

function makeTraveler (name) {
    return {
    name: name,
    food: Math.floor(Math.random() * 100),
    isHealthy: true,
    }
};

//console.log(makeTraveler);

function makeWagon (capacity) {
    return {
        passengers: [],
        capacity: 5,
    }
}; 

function hunt (traveler) {
 if (Math.floor(Math.random() * 100) >= 50) {
     traveler.food + 100;
 }



};
console.log(Math.floor(Math.random() * 100));



//console.log(quarantine(wagon));


//console.log(food(wood));


/**
 * Practice using objects and object notation to group similar types of data together.

Create two different types of objects: a traveler and a wagon.

A traveler has a few properties: an amount of food (number), a name (string), and an isHealthy (boolean).

A wagon has a few properties as well: a passengers list (array) and a capacity (number).

The following code should work once you are finished:

let wagon = makeWagon(5);
let traveler = makeTraveler('Henrietta');
let traveler2 = makeTraveler('Juan');

hunt(traveler); // maybe get more food
eat(traveler2);
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wood)); // print juan's food + henrietta's food

Operations

Write the following functions, which should work on either travelers or wagons. Many of these functions will be short, and some are quite similar to things we've done before (except with objects now). Think about how the objects change how the function needs to work.

Technical note: if you change an object inside of a function, the changes will affect the original object outside of the function as well. This is not true of primitive data types (strings, numbers, booleans, etc).
*/


/*
makeTraveler(name)
Create a new traveler object with the specified name, a random amount of food, and isHealthy = true. This should be very similar to makeCar from today's notes.

makeWagon(capacity)
Create a new wagon with an empty passenger list and the specified capacity. This should be very similar to makeLot from today's notes.

hunt(traveler)
50% chance to increase the traveler's food by 100 (successful hunt), and 50% to increase it by 0 (unsuccessful hunt).

eat(traveler)
Consumes 20 of the traveler's food. If the traveler doesn't have 20 food, the traveler is no longer healthy.

join(wagon, traveler)
Add the traveler to the wagon if there is space. If there is not enough capacity, don't add them.

quarantine(wagon)
Return true if there is at least one unhealthy person in the wagon. Return false if not.

food(wagon)
Return the total amount of food among all occupants of the wagon.
 */