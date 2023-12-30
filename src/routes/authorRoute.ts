import express from "express";

import { createNewAuthor, getAllAuthors } from "../controllers/authorController.js";

const router = express.Router();


router.get("/", getAllAuthors);

router.post("/", createNewAuthor);


export default router;