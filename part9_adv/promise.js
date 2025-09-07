function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
            if (success) {
                resolve("Data fetched successfully")
            }
            else {
                reject("Error fetching data")
            }
        }, 3000)
    })
}

//let response=fetchData()
//console.log(response)//when you do console.log(response) right after calling fetchData(), you only log the Promise object (still pending). To get the actual data, you must use .then or await.
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error))