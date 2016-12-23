var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('views', __dirname + '/views');
app.set('view engine', 'htm');

app.use(express.static(__dirname + 'public'));


app.set('port', process.env.PORT || 5000);


app.get('/', function(req, res){
  res.render('index.htm');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function() {
  	console.log("A user disconnected");
  })

  socket.on(('chat message'), function(msg) {

  io.emit('chat message', msg);
  console.log(msg);
  })

});

app.listen('port', function () {

  console.log("The server is up");
})