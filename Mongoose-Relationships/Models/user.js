const mongoose = require("mongoose");

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

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    addresss: [
        {
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
    /*
    const u = new User({
        firstName: "Harry",
        lastName: "Potter"
    })
    u.addresss.push({
        street: "4 Privet drive",
        city: "Surrey",
        state: "London",
        country: "England"
    })
    */
   
    const res = await u.save();
    console.log(res);
}

makeUser();