const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");

const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data

// app.get("/", (req, res) => {
//   res.send("API Running!");
// });

app.use("/api/user", userRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`App runnig on port ${port}....`.bgGreen.blue.bold);
});
