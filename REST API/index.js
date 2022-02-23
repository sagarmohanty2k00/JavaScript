/*
* This is the main file or entry point of the application
*
*/
// imports
const http = require('http')

// Creating a web server
const server = http.createServer(function(req, res){
    res.end("Hello this is the starting point\n");
});


// Listening to incoming requests on a perticular port
server.listen(3000, function(){
    console.log("Server  listenong on PORT 3000...");
});