import mongoose from "mongoose";

import Note from "../models/note.js";

export const createPost = async (req, res) => {
  const data = req.body;
  const newNote = new Note(data);
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
