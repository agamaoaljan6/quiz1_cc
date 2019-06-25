const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const logger = require("morgan");
const moment = require('moment');
const rootRouter = require("./routes/root");
const clucksRouter = require("./routes/clucks");
const app = express();




app.set('view engine', 'ejs');



app.use(logger("dev"));
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));


app.use((req, res, next) => {
  console.log("Cookies:", req.cookies);
  res.locals.username = req.cookies.username;
  next();
})


app.use("/", rootRouter);
app.use("/clucks", clucksRouter);


const PORT = 1234;
const ADDRESS = "localhost";
app.listen(PORT, ADDRESS, () => {
  console.log(`Server up on http://${ADDRESS}:${PORT} : ${moment().format()}`);
});