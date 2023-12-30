import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Review = sequelize.define("reviews", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rating: {
        type: DataTypes.FLOAT,
        validate: {
            min: 1,
            max: 5
        }
    }
},{
    timestamps: false,
})