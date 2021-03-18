import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import productRouter from "./routes/product";
const app = express();
dotenv.config();

app.use(morgan("dev"));
// routes
app.use("/api", productRouter);
//Listen
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server is running port", port);
});
