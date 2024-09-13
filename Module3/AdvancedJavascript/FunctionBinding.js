const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};

user.sayHi(); // called directly, works! Hi, John
//setTimeout(user.sayHi, 1000)
setTimeout(()=> user.sayHi(), 1000) //Solution 1

const boundSayHi = user.sayHi.bind(user) // new function reference with user context explicitly bound
setTimeout( boundSayHi, 1000 ) // works! Hi, John //Solution 2