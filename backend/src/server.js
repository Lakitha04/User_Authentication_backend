import express from "express";   

import notesRoutes from "./routes/notesRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { connectDB } from "./config/db.js";
import dotenv from "dotenv";


dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001;
app.use(express.json());
connectDB();

app.use("/api/notes", notesRoutes);
app.use("/api/users", userRoutes);





app.listen(PORT, () => {
   console.log("Server is running on port ", PORT);
});

