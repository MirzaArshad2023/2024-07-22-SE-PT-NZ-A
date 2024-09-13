const colorArrays = ["blue", "white", "gray", "red", "Voilet", "white", "blue", "gray"]

const newColorSet = new Set(colorArrays)

if(newColorSet.has("alice-blue"))
{
    //do nothing
}
else
{
    newColorSet.add("alice-blue")
}

newColorSet.delete("Voilet")
console.log(newColorSet)
console.log(newColorSet.size)

//newColorSet.clear()
//console.log(newColorSet)
for(let setValue of newColorSet)
{
    console.log(setValue)
}

newColorSet.forEach(value => console.log(value))