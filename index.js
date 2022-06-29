const express = require('express');
const router = require('./routers/index');
const rescue = require('express-rescue');
const helmet = require("helmet");
const morgan = require("morgan");
const errorMiddleware = require('./middlewares/errorMiddleware')

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/persons', rescue(router.personsRouter))
app.use(errorMiddleware)

app.listen(process.env.APP_PORT, () => {
  console.log(`Running on ${process.env.APP_PORT}`);
});

module.exports = app;