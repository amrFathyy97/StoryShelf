import { NextFunction, Request, Response } from "express";

export const errorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.statusCode).json({
        message: "Something went wrong"
    })
}