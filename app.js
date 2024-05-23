const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/item');
const sequelize = require('./utill/database')
var cors = require('cors');
const app = express();

app.use(cors());

app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.json());
app.use(itemRoutes);

sequelize
      .sync()
      .then(() => app.listen(5000), ()=> console.log('server running'))
      .catch(err => {
        console.log(err);
      })