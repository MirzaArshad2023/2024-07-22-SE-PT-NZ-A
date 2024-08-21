const phone = {
    model: 'iPhone 11',
    colour: 'black',
    Storage: 64
    }

let seas = ["black sea", "red sea", "caspian sea", "Arabian sea"]

if(phone.colour)
    console.log("Phone has a color property and value is " + phone.colour)

if(phone.storage)
    console.log("Phone has a storage property")
else
    console.log("Phone doesn't have storage property")

phone.storage? console.log("Storage exists") : console.log("Storage doesn't exists")

for (let key in phone) { // iterates over each property in the phone object
    console.log('key: ' + key); // prints each object property name (key) in turn
    console.log('value: ' + phone[key]); // prints each object value in turn
    }