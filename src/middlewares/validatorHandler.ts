import {Request, Response, NextFunction} from "express";
import { CustomError } from "./CustomError";
import { ValidateFunction } from "ajv";



export const validatorFunction = (validate: ValidateFunction) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const valid = await validate(req.body);
        if(!valid){
            if( validate.errors && validate.errors[0].message){
                const err = new CustomError(validate.errors[0].message, 400, "Bad request");
                return await next(err);
            }
        }
        return next()
    }
}
