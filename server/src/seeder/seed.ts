import mongoose from "mongoose";
import { config } from "../config/config";
import { RoomModel } from "../models/room.model";
import { seedData } from "../data/data";

const seedRoom = async () => {
    try {
        await mongoose.connect(config.mongoLocalUrl);
        console.log("Connected to local database for seeding");

        await RoomModel.deleteMany();
        console.log("Cleared existing rooms");

        console.log("Seeding rooms data...");
        await RoomModel.insertMany(seedData);
        console.log("Seeded rooms data successfully");

        process.exit();
    }
    catch (error) {
        console.error("Error during seeding:", error);
        process.exit();
    }
}

seedRoom();