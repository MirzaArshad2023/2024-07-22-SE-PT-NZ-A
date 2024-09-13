let A = 10
let X = A * 45
try
{
    
    setTimeout(()=>{ C = Sum(A, X) }, 200)
}
catch(error)
{
    console.log("Error occurred:" + error)
}


console.log("Program finished")
console.log("Success")