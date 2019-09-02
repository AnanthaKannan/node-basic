const express = require("express");
const bodyparse = require("body-parser");

const PORT =  process.env.PORT || 3000


const app = express();
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended: true }));

const router = express.Router();
require('./route')(router);
app.use('/', router);


app.listen(PORT, () => {
    console.log("Server listening on port " , PORT);
})