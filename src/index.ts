import express from "express";

import dotenv from "dotenv";

import helmet from "helmet";

import cookieParser from "cookie-parser";

import { db } from "./config/db.js";

import { createAssociation } from "./config/association.js";

// Routes

import authorRouter from "./routes/authorRoute.js";
import { errorHandler } from "./middlewares/errorHandling.js";

dotenv.config();

db();

createAssociation()

const app = express();

// third party middlewares

app.use(helmet());

app.use(cookieParser());

// built-in middlewares

app.use(express.urlencoded({extended: true}));

app.use(express.json());

// routes

app.use("/author(s)?", authorRouter);

app.use(errorHandler)

const PORT = process.env.PORT || 3000;


// Connect to database
const main = async () => {
    try {
        await app.listen(PORT);
        console.log("Server up and running");
    }catch(err){
        console.log("Failed to listen on port " + PORT, err)
    }
};

main();