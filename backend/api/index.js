const express = require("express");
const cors = require("cors");
require("dotenv").config();

const summarizeRoute = require("../routes/summarize");
const todosRoute = require("../routes/todos");

const app = express();
app.use(
  cors({
    origin: "https://todo-app-cyan-sigma.vercel.app",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/summarize", summarizeRoute);
app.use("/todos", todosRoute); // NEW

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
