const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server); 
app.use(express.static(path.join(__dirname+"/public"))); 

io.on("connection", function(socket){
  socket.on("newuser", function(username){
    socket.broadcast.emit("update", username + " se unió a la conversación"); 
  }); 
  socket.on("exituser", function(username){
    socket.broadcast.emit("update", username + " salió de la conversación"); 
  });
  socket.on("chat", function(message){
    socket.broadcast.emit("chat", message); 
  });
}); 

server.listen(3000); 

 /*socket.on('disconnect', () => {
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

});*/ 
