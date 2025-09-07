const person={
    name : "vaibhav",
    greet(){
        console.log(`hi, I am ${this.name}`)
    }
}

person.greet();
const greetFunction=person.greet//lost when is trasfers to another variable 
greetFunction()

//so we have to bind teh context
const boundGreet=person.greet.bind({name:"john"})
boundGreet()
