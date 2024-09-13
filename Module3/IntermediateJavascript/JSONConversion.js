const room = {
  number: 23,
};
const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
};
meetup.place = room; // meetup references room
console.log(meetup)
room.occupiedBy = meetup; // room references meetup
console.log(room)
let convertedJSON = JSON.stringify(meetup, ['title', 'participants']); // TypeError: Converting circular structure to JSON
let convertedJSON2 = JSON.stringify(meetup, function(key, value) {
    if (key != '' && value == meetup) return undefined // skip references to current object
    else if (typeof value == 'function') return value.toString() // stringify functions
    return value // otherwise return original value unchanged
    }, 2); // use 2 spaces for nicer formatting)
console.log(convertedJSON)
console.log(convertedJSON2)
