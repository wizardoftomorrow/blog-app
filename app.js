// importing modules
const express = require ('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      session = require ('express-session'),
      sequelize = require ('sequelize'),
      fs = require ('fs');

// setting up express app
const app = express()

// setting view engine and views folder
app.set('view engine', 'pug')
app.set( 'views', __dirname + '/views' )

app.use('/', express.static( __dirname + '/public') )
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))


app.listen(3000, (req, res) => {
  console.log('Yuhu Server running on port 3000')
})
