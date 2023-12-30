import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config();

export const sequelize =  new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
    dialect: "postgres"
});

export const db = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log("table has been successfully created.");
    }catch(err){
        console.error('Unable to connect to the database:', err);
    }
};
