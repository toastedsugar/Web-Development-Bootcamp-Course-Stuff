const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/relationshipDB", {
    useNewURLParser: true,
    //createUserIndex: true,        // Not supported in mongoose?
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

//Declaring Schemas here
const userSchema = new mongoose.Schema({
   username: String,
})

const tweetSchema = new mongoose.Schema({
    body: String,
    likes: Number,
    retweets: Number,
    userID: {type: Schema.Types.ObjectId, ref: "user"}
})

const user = mongoose.model("user", userSchema);
const tweet = mongoose.model("tweet", tweetSchema);

const makeTweets = async () => {
    const u = new user({username: "ChickenLover"});
    const tweet1 = new tweet({body: "I love my chicken family", likes: 0, retweets: 0});
    tweet1.u = user;
    u.save();
    tweet1.save();
}