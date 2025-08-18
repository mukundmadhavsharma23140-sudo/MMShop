import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js"; // Assuming you have product routes

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: true, credentials: true })); // allow credentialed requests from your frontend origin
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes); // Register product routes

app.get("/", (req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

