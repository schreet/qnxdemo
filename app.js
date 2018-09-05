const express = require('express');
const app = express();
const db = require('mysql');

// port 8080
app.listen(8080, function(){
	console.log('Server is running at port 8080');
}); 
  

// GET - home page
app.get('/', function (req, res) { 
    return res.send('<h2>This is the home page!</h2>');
});
 
