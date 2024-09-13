// example promise. settles after 250ms with success or failure depending on random number
const promise = new Promise((resolve, reject) => {
  // resolve/reject are callback functions
  if (Math.random() > 0.5)
    setTimeout(() => resolve("Random number ok"), 250); // success
  else setTimeout(() => reject("Random number too low"), 250); // failure
});

promise
    .then((outcome)=> console.log(outcome))
    .catch((error)=> console.log(error))
    .finally(()=> console.log("Finally"))