const express = require('express');
const app = express();
const router = require('./router');
require('dotenv').config();
app.use(express.urlencoded());

app.use("/", router);
app.set("view engine", "ejs");
// Handle non-existing routes.
app.use(express.static('public'));
app.use((req, res) => res.render('pages/NotFound'));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})  