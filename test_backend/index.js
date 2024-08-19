const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const mainRouter = require("./routes");
app.use("/api/v1", mainRouter);

app.listen(3000, () => {
  console.log("Test Server is running on port 3000");
});
