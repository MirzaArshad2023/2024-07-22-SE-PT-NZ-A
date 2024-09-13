String.prototype.show = function()
                        { // creates new 'show' function on built-in String prototype
                            console.log(this);
                        }

"Mirza".show()

// polyfilling for String.prototype
if (!String.prototype.repeat) 
{ // if there's no such function in the prototype already
    String.prototype.repeat = function(n) { // define a repeat function to repeat the string n times
    return new Array(n).join(this); // uses the string ('this') as glue to join n empty array items
    };
}

console.log("Mirza".repeat(5))
