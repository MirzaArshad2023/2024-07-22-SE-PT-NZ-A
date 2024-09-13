const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']

for (let animal of animalsArr) 
{ 
    console.log(animal); 

}

const animalObj = { name: 'tiger', genus: 'panthera', class: 'mammal'}

for(let animal in animalObj)
{
    console.log(animalObj[animal])
}