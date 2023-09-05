import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Local Imports
import routes from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT | 5010;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", routes);

//connects app to database
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
