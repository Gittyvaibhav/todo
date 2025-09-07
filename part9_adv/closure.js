//CLOSURE ARE JUAST FUNCTION and they remeber the environment in which they were created
function outer(){
    let counter =4
    return function(){
        counter++
        return counter
    }
}
let increment = outer()
console.log(increment())