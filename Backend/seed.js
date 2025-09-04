import dotenv from "dotenv";
import products from "./data/products.js";
import Product from "./models/Product.js";
import connectDB from "./config/db.js";

dotenv.config();


// Seed function
const importData = async () => {
  try {
    await connectDB(); // ✅ wait for DB connection

    await Product.deleteMany(); // clears existing products
    await Product.insertMany(products); // insert your 30 products

    console.log("✅ Data imported successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

importData();

