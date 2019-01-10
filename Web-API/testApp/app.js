//required middleware from npm
var Mustache = require("mustache");

//created scripts -- in same directory
var randomNum = require("./randomnumber");
var http = require("http"); //for web requests

//code
var message = Mustache.render("Hello {{firstname}} {{lastname}}, how are you today? ", { firstname: "Michael", lastname: "Brandon" });

//Handles incoming HTTP requests
function reqHandler(req, res) {
    console.log("We have a server request from " + req.url);
    if (req.url === "/") {

        res.end("Welcome to my HOME PAHG");
    }
    else if (req.url === "/about") {
        res.end("This is the about page");
    }
    else if (req.url === "/contact") {
        res.end(message + randomNum());
    }
    else {
        res.end("Page Not Found")
    }

}

//rendering results
console.log(message);
console.log(randomNum());
console.log(randomNum());

//create and start the server
var server = http.createServer(reqHandler);

//starts the server
server.listen(3000);
