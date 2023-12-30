import { NextFunction, Request, Response } from "express"

export const asyncFN = (fn: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            return await fn(req,res,next);
        }catch(err){
            return res.status(500).json({
                message: "Something went wrong"
            })
        }
    }
}