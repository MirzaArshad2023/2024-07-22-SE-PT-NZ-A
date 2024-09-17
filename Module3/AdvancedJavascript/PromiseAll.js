let promise1 = new Promise((resolve,reject)=>{

    let x = 20; y = 50;
    let result = x * y;
    reject("Failure")
})

let promise2 = new Promise((resolve, reject)=>{

    let x = 3; y = 6;
    let result = x * y;
    if(result % 3 == 0)
    {
        resolve("Successful")

    }
    else
        reject("Failure")
})

let promise3 = new Promise((resolve)=> resolve("succesful"))

let promiseResult = Promise.all([promise1, promise2, promise3])

let promiseallSettled = Promise.allSettled([promise1, promise2, promise3])

let promiserace = Promise.race([promise2, promise1, promise3])

promiseResult
            .then((result)=> console.log(result))
            .catch((error)=> console.log(error))
            .finally(()=> console.log("Promise fulfilled"))


promiseallSettled
            .then((result)=> console.log(result))
            .catch((error)=> console.log(error))
            .finally(()=> console.log("Promise fulfilled"))

promiserace
            .then((result)=> console.log(result))
            .catch((error)=> console.log(error))
            .finally(()=> console.log("Promise fulfilled"))