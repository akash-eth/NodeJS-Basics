const EventEmitter = require('events'); // This is the parent class EventEmitter.

// const emitter = new EventEmitter(); // Here this emitter is an object of the class EventEmitter.  } after adding Logger at the end we not need this emitter anymore



//Adding a listner
// A listner is a function that will be called when that event is raised.


// Raise an event
// emitter.emit("messageLogged", {uid: 123, url: "http://google.com"}) // Emit meaning: making noise, or producing something



// emitter.on("logging", (eventArg) =>{     // on is the alias for the built function addEventListner 
//     console.log("Logged In", eventArg);
// });
// emitter.emit("logging", {data: "message"})

/*
    Order:
        1. First we make an emit.
        2. Then we add a listener. But, Listener must me writen above the emit !! Otherwise it won't work
*/

const Logger = require('./logger')
const logger = new Logger();

logger.on('messageLogged', function(eventArg) {
    console.log("Listner is called", eventArg);
});


logger.log('message');