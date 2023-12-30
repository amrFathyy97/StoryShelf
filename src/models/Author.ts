import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Author = sequelize.define("authors", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
}, {
    timestamps: false,
})