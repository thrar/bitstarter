var express = require('express')
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var text = fs.readFileSync('index.html').toString('utf-8');
  response.send(text);
})
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
