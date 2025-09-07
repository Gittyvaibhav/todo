// let computer={cpu:12}
// let lenove={screen:"HD"}
// tomhardware={}
// console.log(`computer`,computer.__proto__)




// let computer={cpu:12}
// let lenovo={
//     screen:"HD",
//     __proto__:computer,
// };
// tomhardware={};
// console.log(`lenovo`,lenovo.__proto__)



let genericCar={tyre:4}

let tesla={
    driver:"AI"
}

Object.setPrototypeOf(tesla,genericCar)
console.log(`tesla`,Object.getPrototypeOf(tesla))