const express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('port',process)

app.use(express.static('public'));
server.listen(3000, () => console.log('Servidor iniciado en 3000'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + 'public');
});

io.on('connection', function (socket) {
  console.log('socket conectado',socket.id);
  io.emit('conectado', {
    texto: 'Nuevo socket conectado: ',
    id: socket.id,
  });

  socket.on('disconnect', () => {
  	console.log('socket desconectado',socket.id);
    io.emit('desconectado', {
      texto: 'Socket desconectado.', 
      id: socket.id,
    });
  });

socket.on('chat:mensaje', (data)=>{
  io.emit('chat:mensaje', data); 
});

socket.on('chat:escribiendo', (usuario) =>{
  socket.broadcast.emit('chat:escribiendo', usuario);
});

}); 
