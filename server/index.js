const express = require('express');
const route2 = require("./routes/login");
const route1 = require("./routes/signup");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());
app.use(route1);
app.use(route2);



app.listen(5000)