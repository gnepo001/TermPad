import express from "express";

import { createNote, getNotes, createUser } from "../controllers/note.js";

const router = express.Router();

// POST Routes
router.post("/createnote", createNote);
router.post("/signup", createUser);

// GET Routes
router.get("/notes", getNotes);

export default router;
