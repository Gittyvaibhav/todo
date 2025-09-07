function Person(name, age) {
    thisname = name
    this.age = age
}

function Car(make, model) {
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", "camry");
// console.log(myCar);

let myNewCar = new Car("Tata", "ASafari");
// console.log(myNewCar);


function Tea(type) {
    this.type = type
    this.describe = function () {
        return `this is a cup of $(this.type)`
    }
}


function Animal(species) {
    this.species = species;
}

Animal.prototype.sound = function () {
    return `${this.species} makes a sound`; 
}

let dog = new Animal("dog");
console.log(dog.sound()); // dog makes a sound
