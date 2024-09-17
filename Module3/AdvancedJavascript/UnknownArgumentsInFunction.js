function Sum()
{
    let result = 0
    for(let i=0; i< arguments.length; i++)
    {
        result = result + arguments[i]
    }
    console.log(result)
}

Sum(1, 2)
Sum(1,3,4,5,5,6,7,7,8,10)