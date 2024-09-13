const arr = [] // simple empty array
console.log( Object.getPrototypeOf(arr) === Array.prototype ) // true: its prototype is Array prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(arr)))

//console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(arr)) ) //inherited properties from prototype