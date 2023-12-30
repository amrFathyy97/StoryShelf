import {Request, Response, NextFunction} from "express";
import { Author } from "../models/Author.js";
import { asyncFN } from "../middlewares/asyncFN.js";
import { CustomError } from "../middlewares/CustomError.js";



export const getAllAuthors = asyncFN(
    async (req: Request, res: Response, next: NextFunction) => {
        const authors = await Author.findAll();
        return res.status(200).json({
            status: "OK",
            data: authors
        })
    }
)

export const createNewAuthor = asyncFN(
    async (req: Request, res: Response, next: NextFunction) => {
        const {first_name, last_name, nationality} = await req.body;
        const author = await Author.create({first_name, last_name, nationality});
        return res.status(201).json({
            status: "OK",
            data: author.toJSON()
        });
    }
);