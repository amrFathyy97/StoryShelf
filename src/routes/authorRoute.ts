import express from "express";

import { createNewAuthor, getAllAuthors } from "../controllers/authorController.js";
import { validatorFunction } from "../middlewares/validatorHandler.js";
import validate from "../utils/authorValidator.js";

const router = express.Router();



router.get("/", getAllAuthors);

router.post("/", validatorFunction(validate), createNewAuthor);


export default router;