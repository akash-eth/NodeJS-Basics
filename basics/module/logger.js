const url = "HTTPS://google.com";

function log(message) {
    console.log(message);
}

module.exports.log = log;

// module.exports.url = url;       // here we can also change the name of exports !! As:

// module.exports.endPoint = url; Just for example !!