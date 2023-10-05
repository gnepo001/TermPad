import express from "express";

import { createNote, getNotes, deleteNote } from "../controllers/note.js";
import { signUp } from "../controllers/user.js";

const router = express.Router();

// POST Routes
router.post("/createnote", createNote);
router.post("/signup", signUp);

// GET Routes
router.get("/notes", getNotes);

//delete
router.delete("/notes/:id", deleteNote);

export default router;
