import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import resourceRoutes from "./routes/resource.route";
import { AppDataSource } from "./db/ormconfig";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use("/resources", resourceRoutes);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => console.log(`[>>>] Server running on port ${PORT}`));
    })
    .catch((err) => console.error("[XXX] DB connection error:", err));