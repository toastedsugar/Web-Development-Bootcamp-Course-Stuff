const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log("Connection open");
    })
    .catch(err =>{
        console.log("Error", err);
    })

/*
const db = mongoose.connection;
db.on("error", console.error.bind);
db.once("open", function (){
    console.log("Connection open");
})
*/

// Creating schema here
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
})

// Creating model here
const Movie = mongoose.model("Movie", movieSchema);

// Adding one movie to the database
const amadeus = Movie({name: "amadeus", 
                        year: 1984, 
                        score: 9.2, 
                        rating: "R"});
amadeus.save();

/*
// Adding multiple movies to database
Movie.insertMany([
    {title: "Amelie", year: 2001, score: 8.3, rating: "R"},
    {title: "Alien", year: 1979, score: 8.1, rating: "R"},
    {title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG"},
    {title: "Stand by Me", year: 1986, score: 8.3, rating: "R"},
    {title: "Monrise Kingdom", year: 2012, score: 7.3, rating: "PG-13"},
])
.then(data => {
    console.log("It Worked");
    console.log(data);
})
*/