const express = require('express');
const app = express();
const router = require('./router');
const logger = require('./shared/logger');
require('dotenv').config();

app.use("/", router);

app.listen(process.env.PORT, () => {
  logger.info(`Server running on port ${process.env.PORT}`);
})