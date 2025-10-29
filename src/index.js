import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.router.js";
import { errorHandler } from "./utils/errorHandler.js";
import helmet from "helmet";

dotenv.config(); 

const app = express();
app.use(express.json());
app.use(helmet());

connectDB();

app.use("/api/users", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
