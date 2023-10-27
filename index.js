// create your own server here first
const express = require("express");
const mongoose = require("mongoose");
const employeeRoutes = require("./routes/employeeRoutes");
const cors = require("cors");
const app = express();

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://AniruddhaBhaumik:aniruddha2003@cluster1.8aslqil.mongodb.net/Comapny"
);
const db = mongoose.connection;
db.on("open", () => {
  console.log("Database connected");
});
db.on("error", () => {
  console.log("Error while connecting to database", err);
});
app.use(express.json());

app.use(cors());
// cross origin resource sharing

// app.get("/", (req, res) => {
//   res.send("Hi from server");
// }); // req-> request; res-> result

app.use("/employee", employeeRoutes);

const port = 5050;
app.listen(port, () => {
  console.log("server started on" + port);
});
