/*const receipeMap = new Map();
receipeMap.set("flour", "1 cup")
receipeMap.set("milk", "1/2 cup")
*/
const recipeMap = new Map([
    ['flour', '1 cup'],
    ['milk', '1/2 cup'],
    ['eggs', 2],
    ['butter', '50g']
    ])

console.log(recipeMap.keys())
console.log(recipeMap.values())
console.log(recipeMap.entries())

for(let mapkey of recipeMap.keys())
{
    console.log(recipeMap.get(mapkey))
}

for(let entry of recipeMap)
{
    console.log(entry)
}