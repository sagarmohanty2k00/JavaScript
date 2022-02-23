/*
* This is the main file or entry point of the application
*
*/
// imports
const http = require('http')
const url = require('url')

// Creating a web server
const server = http.createServer(function(req, res){
    // Get the URL and pasrse it
    const parsedUrl = url.parse(req.url, true); 

    // Get the path
    const path = parsedUrl.path;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // send the response
    res.end("Hello this is the starting point\n");

    // log the path
    console.log("reuqsted path: " + trimmedPath);
});


// Listening to incoming requests on a perticular port
server.listen(3000, function(){
    console.log("Server  listenong on PORT 3000...");
});