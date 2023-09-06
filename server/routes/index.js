import express from "express";

import { createNote, getNotes } from "../controllers/note.js";

const router = express.Router();

// POST Routes
router.post("/createnote", createNote);

// GET Routes
router.get("/notes", getNotes);

export default router;
