const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const sendMail = require("./controller/sendmail");
const app = express();
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.post("/", sendMail);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
