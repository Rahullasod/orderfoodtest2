const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://orderfood:orderfoodpass@cluster0.mv33f.mongodb.net/orderfooddb?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to DB");

        const foodItems = await mongoose.connection.db.collection("food_items").find({}).toArray();

        const foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();

        global.food_items = foodItems;
        global.food_category = foodCategory;

        console.log("Data successfully fetched and stored globally.");
    } catch (err) {
        console.error("Error connecting to database or fetching data:", err);
    }
};



module.exports = mongoDB;





