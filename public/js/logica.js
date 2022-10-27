//Crear una instancia de SocketIO, recibe como parámetro el url del servidor al que se conectará
var socket = io.connect('http://localhost:8080');

var notificaciones = [];

//Escuchar al evento 'hola' y realizar cierta accion, recibe como parámetro el id del evento y un callback con la información recibida
socket.on('conectado', function (data) {
  //Notificar al usuario el evento hola
  console.log(data);
  
  notificaciones.push(data);
  document.querySelector('#notificaciones').innerHTML = JSON.stringify(notificaciones);
});

socket.on('desconectado', function (data) {
  //Notificar al usuario el evento hola
  console.log(data);
  
  notificaciones.push(data);
  document.querySelector('#notificaciones').innerHTML = JSON.stringify(notificaciones);
});

