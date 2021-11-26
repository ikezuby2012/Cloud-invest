const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const xss = require("xss-clean");
const compression = require("compression");

//routes
const userRouter = require("./routes/userRoute");
const utilsRouter = require("./routes/utilRoute");
const errorHandler = require("./controllers/errorController");


const app = express();
//cors
app.use(cors());
//<-- parsing data to the backend
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
//<-- data sanitisation against xss attacks
app.use(xss());

app.use(compression());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/util", utilsRouter);
//ROUTE HANDLER NOT SPECIFIED 
app.all("*", (req, res, next) => {
    next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

module.exports = app;