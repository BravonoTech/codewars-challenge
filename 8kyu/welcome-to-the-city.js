// Create a method that takes as input a name, city, 
// and state to welcome a person. Note that name will 
// be an array consisting of one or more values that 
// should be joined together with one space between each, 
// and the length of the name array in test cases will vary.


function sayHello( name, city, state ) {
    return name.length === 1? `Hello, ${name[0]}! Welcome to ${city}, ${state}!` : `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
    }