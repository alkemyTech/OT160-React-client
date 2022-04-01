const express=require('express');
const app =express();
app.use(express.static(__dirname+'/public'))
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', (socket) => { console.log(socket.id) });
server.listen(3000);