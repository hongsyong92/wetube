import express from "express";
import morgan from "morgan";

const PORT = 4000;
const loggerMiddleware = morgan("dev");

const app = express();

const home = (req, res, next) => {
  return res.send("HOME");
};

app.use(loggerMiddleware);
app.get("/", home);

const handleListening = () =>
  console.log(`✅ Server listening on port ${PORT}`);

app.listen(4000, handleListening);
