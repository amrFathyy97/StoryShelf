import { NextFunction, Request, Response } from "express";
import { asyncFN } from "../middlewares/asyncFN";
import { Book } from "../models/Book";

export const gellAllBooks = asyncFN(
    async (req: Request, res: Response, next: NextFunction) => {
        const books = await Book.findAll();
        return res.status(200).json({
            status: "OK",
            data: books
        })
    }
);

export const createBook = asyncFN(
    async (req: Request, res: Response, next: NextFunction) => {
        const {title, description, published_date, genre} = await req.body
        const book = await Book.create({title, description, published_date, genre});
        return res.status(201).json({
            status: "OK",
            data: book.toJSON()
        })
    }
)