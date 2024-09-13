let todayDate = new Date()
console.log(+todayDate)
const epoch = new Date(0)
const jan2_1970 = new Date(1000 * 60 * 60 * 24)
console.log(epoch)
console.log(jan2_1970)

const dateString = new Date("2025-02-02")
console.log(dateString)

const boxingDay = new Date(2024, 11, 26)
console.log(boxingDay)

console.log(todayDate.getDay())
console.log(todayDate.getFullYear())
console.log(todayDate.getMonth())

const christmas = new Date('2023-12-25')
console.log(christmas.toLocaleTimeString())

console.log( todayDate.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }) )
const nyeLocal = new Date('2023-12-31 23:59:59')
console.log(nyeLocal.toLocaleString())