const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
const router = express.Router()



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controller/authController')(app)
require('./controller/userController')(app)

app.listen(3000)

