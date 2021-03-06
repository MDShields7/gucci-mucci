const express = require("express");
const bodyParser = require("body-parser");
// const massive = require("massive");
const stripeController = require("./controllers/stripe");
const mailControll = require("./controllers/nodemail");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build/`));

// massive(process.env.CONNECTION_STRING).then(database => {
//     app.set('db', database);
// }).catch( error => {
//     console.error('Error connecting to database', error)
// });

app.post("/api/stripe", stripeController.checkout);
app.post("/api/email", mailControll.sendEmail);
app.post("/api/reciept", mailControll.sendReciept);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`© G U C C I server is listening on ${PORT} 💎 👜 🐯 🐍 👠 💎`);
});
