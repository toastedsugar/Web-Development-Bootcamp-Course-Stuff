const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    console.log("HOME");
    res.render("home.ejs")
})

const port = 3000;
app.listen(port, () => {
    console.log("FDAFSDAFDSfdas");
})