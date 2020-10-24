const express = require("express");
const app = express();
const http = require("http")
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const connectDB = require("./config/db.js");
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.use(require('morgan')("dev"));
app.use(require("cors")());
// routes
const UsersRouter = require("./routes/users");
const ExerciseRouter = require("./routes/exercise");
app.use('/users', UsersRouter);
app.use('/exercise', ExerciseRouter);


server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})