async function ProcessLogic()
{

    let x = 10
    let y = 20
    let result
    console.log("x :" + x)
    console.log("y :" + y)

    let promise1 = new Promise((resolve) => setTimeout(() => { result = x * y; resolve(result) }, 3000))

    promise1
        .then((result) => console.log(result))

    let resultR = await promise1

    console.log(result * 100)

}
ProcessLogic()


