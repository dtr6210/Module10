const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

app.use("/", (req, res) => {
  res.send({ status: 200, message: "Get to the Choppa!!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
