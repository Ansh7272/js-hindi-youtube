//  Date

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date("01-23-2023")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMinutes())
console.log(newDate.getHours())
console.log(newDate.getUTCFullYear())


newDate.toLocaleString('default',{
    weekday: "long"
})