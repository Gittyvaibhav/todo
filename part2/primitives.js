//number
let balance = 120;
let anotherbalance = new Number(120);
// console.log(balance);
// console.log(anotherbalance);

console.log(typeof (balance));
console.log(typeof (anotherbalance));
// in js everything is an object or can be converted into an object


// null and undefined
// let firstName;
// console.log(firstName);

let firstName = null;
console.log(firstName);


//string
let myString = "lola";
let myStringOne = 'lelo';
let userName = 'mera';

let oldGreet = myString + " hitesh"; // string concatenation
console.log(oldGreet); // "lola hitesh"



let greetMessage = `bhai ${userName}`;//string iterpolation In modern JavaScript, template literals (`${}`) are preferred because they’re cleaner and easier to maintain.
console.log(greetMessage);



let sm1 = Symbol("vaibhav");
let sm2 = Symbol("vaibhav");

console.log(sm1 == sm2); // false
//symbol returns a unique value therefore sm1!=sm2