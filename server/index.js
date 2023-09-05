import express from "express";
import cors from "cors";

const app = express();
const PORT = 5010;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.listen(PORT);
console.log(`Server listening on Port: ${PORT}`);
