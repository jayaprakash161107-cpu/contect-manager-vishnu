
import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/dbConnection.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
connectDb();

const app = express();
app.use(express.json());

app.use("/api/contacts", contactRoutes);
app.use("/api/users", authRoutes);

app.get("/", (req,res)=>{
  res.json({message:"Contact Manager API running"});
});

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
});
