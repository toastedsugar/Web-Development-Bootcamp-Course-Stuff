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
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"]
    }
})

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    product: [{ type: Schema.Types.ObjectId, ref: "product" }]
})

// Compiling Schemas here
const product = mongoose.model("product", productSchema);
const Farm = mongoose.model("Farm", farmSchema)

/*
product.insertMany(
    {name: "Goddess Melon", price: "4.20", season: "Summer"},
    {name: "Sugar Baby Watermelon", price: "4.20", season: "Summer"},
    {name: "Asparagus", price: "6.66", season: "Spring"},
)
*/

const makeFarm = async () => {
    const farm = new Farm({ name: "Full Belly Farms", city: "Gunda, CA", })
    const melon = await product.findOne({name: "Goddess Melon"});
    farm.product.push(melon);
    console.log(farm);
    await farm.save();
}
makeFarm();