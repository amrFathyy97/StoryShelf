import { NextFunction, Request, Response } from "express";
import { asyncFN } from "../middlewares/asyncFN";
import { Review } from "../models/Review";

export const getAllReviews = asyncFN(
    async (req: Request, res: Response, next: NextFunction) => {
        const reviews = await Review.findAll();
        return res.status(200).json({
            status: "OK",
            data: reviews
        })
    
    }
);

export const createReview = asyncFN(
    async (req: Request, res: Response, next: NextFunction) => {
        const {rating} = await req.body;
        const review = await Review.create({rating});
        return res.status(201).json({
            status: "OK",
            data: review.toJSON()
        })
    }   
)