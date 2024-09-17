
async function func1()
{
    let start = "Started Preparing Pizza";
    let promise1 = new Promise(resolve => setTimeout(() => resolve(start), 1000)
    ).then(result => { // promise handler function inside .then()
        console.log(result);
       
    })
    await promise1;
}
async function func2()
{
   
    let  start = "Made the base"
    let promise1 = new Promise(resolve => setTimeout(() => resolve(start), 2000)
    ).then(result => { // promise handler function inside .then()
        console.log(result);
       
    })
    await promise1;
}
let func3 = async function()
{

    let  start = "Added the sauce and cheeze"
    let promise1 = new Promise(resolve => setTimeout(() => resolve(start), 2000)
    ).then(result => { // promise handler function inside .then()
        console.log(result);
       
    })
    await promise1;
    
}
let func4 = async function()
{

    let  start = "Added the pizza toppings"
    let promise1 = new Promise(resolve => setTimeout(() => resolve(start), 2000)
    ).then(result => { // promise handler function inside .then()
        console.log(result);
       
    })
    await promise1;
}
let func5 = async () =>
{

    let  start = "Cooked the pizza"
    let promise1 = new Promise(resolve => setTimeout(() => resolve(start), 2000)
    ).then(result => { // promise handler function inside .then()
        console.log(result);
       
    })
    await promise1;
}
let func6 = async ()=>
{

    let  start = "Pizza is ready"
    let promise1 = new Promise(resolve => setTimeout(() => resolve(start), 2000)
    ).then(result => { // promise handler function inside .then()
        console.log(result);
       
    })
    await promise1;
}
func1()
func2()
func3()
func4()
func5()

/*setTimeout(func1, 1000)
setTimeout(func2, 2000)
setTimeout(func3, 3000)
setTimeout(func4, 4000)
setTimeout(func5, 5000)
setTimeout(func6, 6000)
*/

/*let start = "Started Preparing Pizza";
new Promise(resolve => setTimeout(() => resolve(start), 1000)
).then(result => { // promise handler function inside .then()
    console.log(result);
    start = "Made the base"
    return new Promise(resolve => setTimeout(() => resolve(start), 2000));
}).then(result => { // can explicitly return new promises
    console.log(result); 
    start = "Added the sauce and cheeze"
    return new Promise(resolve => setTimeout(() => resolve(start), 3000));
}).then(result => { // which use the results of previously resolved promises in the chain
    console.log(result); 
    start = "Added the pizza toppings"
    return new Promise(resolve => setTimeout(() => resolve(start), 4000));
}).then(result=>{
    console.log(result)
    start = "Cooked the pizza"
    return new Promise(resolve => setTimeout(()=> resolve(start), 5000))
}).then(result=>{
    console.log(result)
    start = "Pizza is ready"
    return new Promise(resolve => setTimeout(()=> resolve(start), 6000))
}).then(result =>
{
    console.log(result)
}
)*/
