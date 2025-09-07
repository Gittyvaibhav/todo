// //first
// let teaFlavours=["green tea","black tea","oolong tea"];
// let firstTea =teaFlavours[0]
// console.log(firstTea)

// //second
// let cities=["london","tokyo","paris","new york"];
// let favouritecity =cities[2]
// console.log(favouritecity)


// //third
// let teatypes=["herbal tea","white tea","masala tea"];
// teatypes[1]="jasmie tea";
// console.log(teatypes)

// //fourth
// let citiesVisited=["mumbai","sydeny"]
// citiesVisited.push("berlin")
// console.log(citiesVisited)

//fifth
// let citi=["mumbai","sydeny"]
// lastOrder=citi.pop()
// console.log(citi)
// console.log(lastOrder)

//6 soft copy
let popularteas = ["green tea", "black tea", "oolong tea"];
let softcopy = popularteas;
//A shallow copy (soft copy) only copies top-level values.//If the array/object has nested objects, they are still shared (references).

//8
let teatypes = ["herbal tea", "white tea", "masala tea"];
let poputeas = ["green tea", "black tea", "oolong tea",];
let teas = teatypes.concat(poputeas);
console.log(teas)