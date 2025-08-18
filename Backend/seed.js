import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js"; // your local data file
import Product from "./models/Product.js"; // your Product model
import connectDB from "./config/db.js";

dotenv.config();


//mongoose
  //.connect(process.env.MONGO_URI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  //})
  //.then(() => console.log("MongoDB connected"))
  //.catch((err) => console.error(err));

dotenv.config();
connectDB();

// Seed function
const importData = async () => {
  try {
    await Product.deleteMany(); // optional: clears existing products
    await Product.insertMany(products); // insert your 30 products
    console.log("Data imported!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
