import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Book = sequelize.define("books", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    published_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false,
})