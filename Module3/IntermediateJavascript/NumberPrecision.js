const toobig = 1e350 // 1 * 10350 - overflows storage
console.log(toobig) // Infinity
console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
const point1 = 0.1; 
const point2 = 0.2;
const result = Number(point1 + point2)
console.log(result.toFixed(2))