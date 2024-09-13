class User 
{
    constructor(first, last) 
    {
        this.first = first;
        this.last = last;
    }
    hasShortName() 
    {
        return this.first.length >= 3
    }
}

let user1 = new User("Mirza", "Arshad")
let user2 = new User("Bruce", "Wills")

console.log(user1)
console.log(user2)