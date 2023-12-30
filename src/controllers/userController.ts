import { NextFunction, Request, Response } from "express";
import { asyncFN } from "../middlewares/asyncFN";
import { User } from "../models/User";

export const getAllUsers = asyncFN(
    async (req: Request, res: Response, next: NextFunction) => {
        const users = await User.findAll();
        return res.status(200).json({
            status: "OK",
            data: users
        })
    }
);

export const createUser = asyncFN(
    async (req: Request, res: Response, next: NextFunction) => {
        const {first_name, last_name, email, password} = await req.body;
        const user = await User.create({first_name, last_name, email, password});
        return res.status(201).json({
            status: "OK",
            data: user.toJSON()
        })
    }
)