const express = require("express");
const app = express();
/* Outputs something every time there is a request
    Express creates the request and response object for every incoming request

app.use((request, response) => {
    console.log("New Request!");
    response.send("HELLOOOOOOOOOO");
})
*/

app.get("/cats", (request, response) => {
    console.log("MEOW");
    response.send("MEOW");
})

app.get("/dogs", (request, response) => {
    console.log("WOOF");
    response.send("WOOF");
})

app.get("/", (request, response) => {
    console.log("HOME");
    response.send("HOME");
})

app.get("*", (request, response) => {
    console.log("IDK");
    response.send("IDK");
})

// Starts the application to listen on a specific port
let port = 8080;
app.listen(port, () => {
    console.log("Listening on port: ", port);
})