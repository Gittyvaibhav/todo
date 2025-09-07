//1.

// let arr = ["green tea", "black tea", "chai", "oolong tea"]
// let tea=[];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "chai") {

//         console.log(i);
//         break;
//     }
//     else {
//         tea.push(arr[i])
//     }
// }
//   console.log(tea)


2//
// let arr = ["new york", "paris", "london", "berlin",]
// let arr2 = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "paris") {
//         continue;
//     }
//     else {
//         arr2.push(arr[i])

//     }
// }
//  console.log(arr2) 


//3 FOROF
// let arr = ["1", "2", "3", "4","5"]
// let smallNumbers=[];
// for (const num of arr) {
//     if(num==4){
//         break;
//     }
//     smallNumbers.push(num)
// }
// console.log(smallNumbers)


//4 forof
// let arr=["chai","green tea","herbal tea","black tea"]
// let prefferedTeas=[]
// for (const num of arr) {
//     if(num=="herbal tea"){
//         continue;
//     }
//     prefferedTeas.push(num)
// }
// console.log( prefferedTeas)


//5
// let citiesPopulation = {
//     "london": 8900000,
//     "new york": 8400000,
//     "paris": 2200000,
//     "berlin": 3500000
// };

// let cityNewPopulations = {};

// for (const city in citiesPopulation) {
//     if (city == "berlin") {
//         break; // stop once we reach berlin
//     }
//     cityNewPopulations[city] = citiesPopulation[city];
// }

// console.log(cityNewPopulations);



//6
// let worldCities = {
//     "Sydney": 5000000,
//     "Tokyo": 9000000,
//     "Berlin": 3500000,
//     "Paris": 2200000
// };

// let largeCities = {};

// for (const city in worldCities) {
//     if (worldCities[city] < 3000000) {
//         continue;
//     }
//     largeCities[city] = worldCities[city];
// }

// console.log(largeCities);


// 

//8
let nums=["2","5","7","9"]
let dnums=[]
for(let i=0;i<nums.length;i++){
    if(nums[i]=="7"){
        continue;
    }
    else{
        dnums.push(nums[i]*2)
    }
     
}
console.log(dnums)