const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const router = require("./routes/routes")
const constant =require("./config/constant")
const app = express();
const cors =require("cors")
app.use(express.json());
app.use(cors())



app.get("/",(request,response)=>{
  return response.status(200).json('message"welcome"')
})

app.use("/api", require("./routes/routes"))


const PORT =process.env.PORT || 6000;
mongoose
  .connect(constant.MONGODB_URL)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is listening on port:${PORT} only`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });
