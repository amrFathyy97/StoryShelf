import express from "express";

import dotenv from "dotenv";

dotenv.config();

import { db } from "./config/db.js";
import { User } from "./models/User.js";

db();





const app = express();

const PORT = process.env.PORT || 3000;

const main = async () => {
    try {
        await app.listen(PORT);
        console.log("Server up and running");
    }catch(err){
        console.log("Failed to listen on port " + PORT, err)
    }
};

main();