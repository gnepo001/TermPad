import express from "express";

import { createNote } from "../controllers/note.js";

const router = express.Router();

// Post Routes
router.post("/note", createNote);

export default router;
