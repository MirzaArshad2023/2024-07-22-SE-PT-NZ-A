/*console.log(1/0)
console.log(-1/0)
console.log( 4 * 5 )
console.log("Mirza" * 2)
console.log( 45 / "IOD")*/

let one = 100000000000;
let two = 2;
let three = 3;

//console.log(one + two - three * two / one);

one += 1
console.log(one)

two -= 1
console.log(two)

const bigint_valid = 1234567890123456789012345n;
const bigint_invalid = 1234567890123456789012345; // too large for standard integers
console.log(bigint_valid)
console.log(bigint_invalid)
console.log(bigint_valid == bigint_invalid) // false
