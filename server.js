const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')


const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, './app/public')));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, ()=>{
    console.log(`App listening on PORT: ${PORT}`);
});