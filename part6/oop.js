// let car = {
//     make: "toyota",
//     model: "caary",
//     year: "2002",

//     start: function () {
//         return ` ${ this.make }car got started in ${ this.year } `
//      }
// }
// console.log(car.start())


//constructor function


// 


// function Animal(type){
//     this.type=type
// }
// Animal.prototype.speak=function(){
//     return`${this.type} makes a sound`
// }

// Array.prototype.hitesh=function(){
//     return`Custom method ${this}`
// }

// let myArray=[1,2,3]
// console.log(myArray.hitesh())
// let myNewArray=[1,2,3,4,5,6]
//  console.log(myArray.hitesh())




//inheritance borrowing functionality from already existing class

class Vehicle{
    constructor(make,model){
        this.make=make
        this.model=model
    }

    start(){
        return`${this.model}is a car from${this.make}`;
    }
}
class Car extends Vehicle{
    drive(){
        return`${this.make}:this is an inheritance example`;
    }
}
let myCar= new Car("Toyota","corolla")
// console.log(myCar.start())
// console.log(myCar.drive())
let vehOne=new Vehicle("toyota","corolla")
// console.log(vehOne.make)


//encapsulation restrict direct access to object data

class BankAccount{
    #balance=0;//using # ensures that no one can visit the data

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }
    getBalance(){
        return`$${this.#balance}`
    }
}

let account=new BankAccount()
// console.log(account.getBalance())


//abstraction   (hides complex implementation details)

class CoffeeMachine{
    start(){
        // call database
        // filter value
        return`starting the machine.....`
    }
    brewCoffee(){
     //complex calculations 
     return`Brewing coffee`  ;
    }
    pressStartButton(){
   let msg1= this.start()
   let msg2= this.brewCoffee()
return`${msg1} + ${msg2}`
}
}

let myMachine = new CoffeeMachine()

// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());




//  polymorphism the ability of something to have or to be dispalyed in more than one form

class Bird{
    fly(){
        return`flying....`
    }

}

class Penguin extends Bird{
    fly(){
       return`Penguins can't fly` 
    }
}
let bird =new Bird()
let penguin=new Penguin()
// console.log(bird.fly())
// console.log(penguin.fly())



//static
class Calculator{
    static add(a,b){
        return a+b
    }

}

// let miniCalc=new Calculator()
// console.log(miniCalc.add(2,3));
// console.log(Calculator.add(2,3))

// Getters and Setters
class Employee{
    constuctor(name,salary){
        this.name=name
        this._slary=salary
    }
    get salary(){
        return`You are noe allowed to see thye salary`
    }
    set salary(value){
        if(value<0){
            console.error("Invalid salary")
        }
       else{
        this._salary=value
    }
    }
}

let emp= new Employee("Alice",50000)
console.log(emp._salary)