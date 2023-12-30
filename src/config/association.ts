
import { User } from "../models/User.js";
import { Author } from "../models/Author.js";
import { Book } from "../models/Book.js";
import { Review } from "../models/Review.js";



export const createAssociation = async () => {
    try {
        await Author.hasMany(Book);
        await User.hasMany(Review);
        await Book.hasMany(Review);
        console.log("Associations has been successfully created.");
    }catch(err){
        console.error("Unable to create association:", err);
    }
}

