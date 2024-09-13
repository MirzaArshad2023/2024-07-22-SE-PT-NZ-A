// example promise. settles after 250ms with success or failure depending on random number
//const promise = new Promise((resolve, reject) => { // resolve/reject are callback functions
//    if (Math.random() > 0.5) setTimeout( () => resolve('Random number ok'), 250 ) // success
//    else setTimeout( () => reject('Random number too low'), 250 ) // failure
//    })

let promise = new Promise((resolve, reject)=>{

    let result = Math.floor(Math.random() * 5)
    console.log(result)
    if(result > 0)
        resolve("Positive outcome")
    else
        reject("Negative outcome")
})
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})
.finally(()=>{console.log("finally promise settles")})