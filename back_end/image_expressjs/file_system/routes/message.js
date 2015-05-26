var express = require('express');
var router = express.Router();

function makeid()
{
    var text = "";
    var possible = ["Beautiful", "Awesome", "Smart", "Funny", "Absent"];
    var arrayName = ["David", "Paul", "Eleonore", "Valentin", "Karim"];

      text += arrayName[(Math.floor(Math.random() * possible.length))];
      text += " is ";
      text += possible[(Math.floor(Math.random() * possible.length))];

    return text;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.get("Accept"));
  console.log(req.accepts('html', 'text/plain', 'json'));

  var payload = {
	"message" : makeid(),
	"author" : "david oh oh"
  }

  if (req.accepts('text/html', 'text/plain', 'application/json') === 'text/plain') {
	res.send(payload.message);
  }	else if (req.accepts('text/html', 'text/plain', 'application/json') === 'application/json') {
	  res.send(payload);	
  } else {
      res.render('message', payload);	
  }

});

module.exports = router;
