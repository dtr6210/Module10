const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());

app.use("/", (req, res) => {
  res.send({ status: 200, message: "Run!!!! Goooo!!! Get to the Choppa!! FROM EXERCISE 2!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
