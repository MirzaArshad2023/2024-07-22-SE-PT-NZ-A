
function PrintMyName(name)
{

    //console.log(`Your name is ${name}`)
    console.log("Your name is " + name)
}

/*PrintMyName("Mirza")
PrintMyName("Joshua")
PrintMyName("Meera")
PrintMyName("Kris")*/

let result

result = Doubles(4)
console.log(result)
result = Doubles(result)
console.log(result)
result = Doubles(result)
console.log(result)

function Doubles(x)
{
    return x * x
}



// function checkAge returns a value when called
function checkAge(age) {
    if (age >= 18) {
    return 'adult'; // if the condition is true, return this string and exit
    }
    return 'non-adult'; // if the condition was false, return this string and exit
    }

 

    console.log( checkAge(21) ) // adult
    console.log( checkAge(13) ) // non-adult