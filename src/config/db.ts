import { Sequelize } from "sequelize";

import dotenv from "dotenv";
import { User } from "../models/User.js";

dotenv.config();

export const sequelize =  new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
    dialect: "postgres"
});

export const db = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(err){
        console.error('Unable to connect to the database:', err);
    }
};

