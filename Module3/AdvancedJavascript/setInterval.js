let intervalID = setInterval(()=> console.log(new Date()), 1000)

setTimeout(() => clearInterval(intervalID), 5000)
