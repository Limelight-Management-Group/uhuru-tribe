const express = require('express');
let app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

// direct requests to the public directory
app.use(express.static(__dirname + '/public'));

// set up template
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) =>{
	console.log('checking in from home!')
	res.render('index');
})



const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log('the server is now running on port: ' + port);
});

module.exports = app;