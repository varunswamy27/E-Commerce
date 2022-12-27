import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/user.router";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/", userRouter);

const CONNECTION_URL =
  "mongodb+srv://varunswamy97:v8097531709@cluster0.ckslmar.mongodb.net/e-commerce?retryWrites=true&w=majority";
const PORT = process.env.PORT;

// MONGOOSE CONNECTION
mongoose.set("strictQuery", true);
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () =>
      app.listen(PORT, function () {
        console.log(`Listening on port ${PORT}`);
      }),
    console.log("MongoDB Started")
  )
  .catch((err) => {
    console.log(err,"MongoDB Connection Failed");
  });

// Testing API
// app.get("/", function (req, res) {
//   res.send("Hello Varun Swamy");
// });
