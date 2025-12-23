import mongoose from "mongoose";
import { config } from "./config";

export const dbConnect = async () => {
    try {
        let connectionString;
        if (config.env === "development") {
            connectionString = config.mongoLocalUrl;
        }
        if (config.env === "production") {
            connectionString = config.mongoUrl;
        }
        if (!connectionString) {
            throw new Error("Database connection string not found");
        }
        await mongoose.connect(connectionString).then(() => {
            console.log("Database connected");
        });
    }
    catch(err) {
        console.log("Database connection error", err);
        process.exit(1);
    }
}