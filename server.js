var app = require('express')();
var express = require('express');

var http = require('http').Server(app);
var io = require('socket.io')(http);
var listen = process.env.PORT || 3000;

app.use(express.static(__dirname +'/public'));

app.get('/', function (req,res) {

  console.log("index");
  res.sendFile(__dirname + '/public/index.htm');

});

io.on('connection', function(socket) {

  console.log("A user connected");

  socket.on('disconnect', function() {

    console.log("A user disconnected");
  })

  socket.on('chat message', function(msg) {

    console.log('Message:' + msg);

    io.emit('chat message', msg);

  });

  
});


http.listen(listen, function() {
  console.log("Listening on:" +listen);
})