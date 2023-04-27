const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// const axios = require('axios');
const port = process.env.PORT || 4242


// gegevens inladen


app.use(express.static(path.resolve('public')));

// Set view engine
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs'); 

// Routing file
let appRoutes = require('./routes/routes');
app.use('/', appRoutes);


io.on('connection', (socket) => {
    socket.on('chat message', (chat) => {
        io.emit('chat message', chat);
        // console.log('message' + word);
    })

    socket.on('wordData', (data) => {
        io.emit('wordData', data);
        console.log(data);
    })

    socket.on('new-user', (username) => {
        console.log(`${username} has joined the chat`);
        io.emit('new-user', username);
    })


    console.log('A user connected');
    console.log(socket.rooms)

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
})


http.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
});

