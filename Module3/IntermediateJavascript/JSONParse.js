const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
  date: "2023-10-13",
};
const meetupString = JSON.stringify(meetup); // convert object to string

console.log(meetupString)

let meetupObjectConverted = JSON.parse(meetupString)

console.log(meetupObjectConverted)

const meetupParsed = JSON.parse(meetupString, (key, value) => { // convert string to object
    if ( !isNaN(Date.parse(value)) ) return new Date(value) //if valid date, create Date object
    return value;
    })

console.log(meetupParsed)