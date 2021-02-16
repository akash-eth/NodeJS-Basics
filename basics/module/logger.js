/* var x=; This must be on line 1 to get this error

SyntaxError: Unexpected token ';'

This is because node do not directly runs this code. But,  it wraps it inside of a function called module wrapper function.

*/



const url = "HTTPS://google.com";

function log(message) {
    console.log(message);
}

// module.exports.logger = log; // We use this method to fetch different functions present in the function. As, logger is the only property so,

module.exports = log;


// module.exports.url = url;       // here we can also change the name of exports !! As:

// module.exports.endPoint = url; Just for example !!