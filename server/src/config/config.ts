import dotenv from "dotenv";
import * as process from "node:process";

dotenv.config({ path: "config/.env.local" });

export const config = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
    mongoLocalUrl: process.env.MONGODB_URL_LOCAL || "mongodb://localhost:27017/",
    mongoUrl: process.env.MONGODB_URL || "mongodb://localhost:27017/",
}