import express from "express";

import { createNote, getNotes } from "../controllers/note.js";
import { signUp } from "../controllers/user.js";

const router = express.Router();

// POST Routes
router.post("/createnote", createNote);
router.post("/signup", signUp);

// GET Routes
router.get("/notes", getNotes);

export default router;
