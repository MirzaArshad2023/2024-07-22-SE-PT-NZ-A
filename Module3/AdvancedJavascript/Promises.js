

function ExecuteFunctions(x, y)
{
    x()
    y()
}

ExecuteFunctions(()=>{console.log("print1")}, ()=>{console.log("print2")})