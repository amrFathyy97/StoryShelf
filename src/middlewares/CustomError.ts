export class CustomError extends Error {
    constructor(public message: string, public statusCode: number, public statusMessage: string){
        super(message)
    }
}