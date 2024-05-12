const express = require("express");
const taskRouts = require("./routs/taskRouts");
const connectDB = require("./db/connection");
const notfound = require("./middleware/not-found");
const errHandlerMiddlware = require("./middleware/err-handler");
const app = express();

// Middlewar

app.use(express.json());

app.use("/api/v1/tasks", taskRouts);

/// Not Found
app.use(notfound);
// Error Handler
app.use(errHandlerMiddlware);

const port = 3000;
const start = async () => {
  try {
    await connectDB("mongodb://localhost:27017/Task-Manager");
    app.listen(port, console.log(`Server is listening on port: ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
