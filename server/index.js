const express = require("express");
const bodyParser = require("body-parser");
// const massive = require("massive");
const stripeController = require("./controllers/stripe");
const mailControll = require("./controllers/nodemail");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

// massive(process.env.CONNECTION_STRING).then(database => {
//     app.set('db', database);
// }).catch( error => {
//     console.error('Error connecting to database', error)
// });

app.post("/api/stripe", stripeController.checkout);
app.post("/api/email", mailControll.sendEmail);
app.post("/api/reciept", mailControll.sendReciept);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`© G U C C I server is listening on ${PORT} 💎 👜 🐯 🐍 👠 💎`);
});
