import {Request, Response, NextFunction} from "express";
import { Author } from "../models/Author.js";
import { asyncFN } from "../middlewares/asyncFN.js";



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
        const author = await Author.create({first_name: req.body.firstName, last_name: req.body.lastName, nationality: req.body.nationality});
        return res.status(201).json({
            status: "OK",
            data: author.toJSON()
        });
    }
)