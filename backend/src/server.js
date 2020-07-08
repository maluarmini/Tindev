// importando o microframework express, para lidar com rotas e requisições
const express = require('express');
// ODM , ferramenta que facilita trabalhar com banco de dados, usando sintaxe apenas de javascript
const mongoose = require('mongoose'); 

// outras importações necessárias 
const routes = require('./routes');
const cors = require('cors');

// criando um servidor com o express
const app = express(); 
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const {user} = socket.handshake.query;

    console.log(user, socket.id)

    connectedUsers[user] = socket.id
});

mongoose.connect('mongodb+srv://maluarmini:maluarmini@cluster0-78z0t.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use((req,res,next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

// usar configurações que estão em outro arquivo ou em outro módulo utilizamos o 'use'
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
