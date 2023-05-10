import express from "express";
import cors from "cors";
import bodyParser, { json } from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/user.router";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";

dotenv.config({ path: "./.env" });

const app = express();

app.use(fileUpload({
  useTempFiles: true
}))
app.use(cors());
app.use(bodyParser.json());
app.use('/public', express.static('public'));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/", userRouter);


const PORT = process.env.PORT;

// MONGOOSE CONNECTION
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Started"))
  .catch((err) => {
    console.log(err, "MongoDB Connection Failed");
  });

// Testing API
app.get("/", function (req, res) {
  res.send("Hello Varun Swamy");
});
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
