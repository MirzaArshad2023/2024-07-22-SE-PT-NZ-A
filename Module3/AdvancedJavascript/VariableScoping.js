let x = 10
const institute = "IOD"

function PrintName(personName)
{
    let a = 2
    let b = 3
    personName = personName + " IOD student"
    console.log(personName)
    console.log(x)
    console.log(institute)
    if(a == 2)
    {
        //local scope of this if
        a = a * 2
        b = b * 3
        if(x == 10)
        {
            const country = "NZ"
            a = a + 50
            //local scope of this if
        }
        
    }
}

PrintName("Mirza")
if(x == 10)
{
    x = x + 1
    const university = "AUT"
    console.log(university)

}
else
{

}
console.log(university)