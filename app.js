const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);
const port = process.env.PORT || 4242
const historySize = 50;
let chatHistory = [];
let wordDescriptionHistory = [];

let onlineUsers = {};
console.log('onlineUsers', onlineUsers)

// gegevens inladen


app.use(express.static(path.resolve('public')));

// Set view engine
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs'); 

// Routing file
let appRoutes = require('./routes/routes');
app.use('/', appRoutes);


io.on('connection', (socket) => {
    socket.emit('chat history', chatHistory);
    socket.emit('word description history', wordDescriptionHistory);

    socket.on('chat message', (chat) => {

        while (chatHistory.length >= historySize) {
            chatHistory.shift();
        }
        chatHistory.push(chat);
 console.log('chatHistory', chatHistory)
        io.emit('chat message', chat);
        console.log(`${chat.username}: ${chat.message}`);
    })

    socket.on('typing', (typingUser) => {
        // io.emit('typing', typingUser);
        socket.broadcast.emit('typing', typingUser);
        console.log(`${typingUser} is typing`);
    })

    socket.on('stop typing', (typingUser) => {
        // io.emit('typing', typingUser);
        socket.broadcast.emit('stop typing', typingUser);
    })


    socket.on('wordData', (data) => {
        io.emit('wordData', data);

        while (wordDescriptionHistory.length >= historySize) {
            wordDescriptionHistory.shift();
        }
        wordDescriptionHistory.push(data);
        console.log(data);
    })


    socket.on('new-user', (username) => {
        console.log(`${username} has joined the chat`);
        // onlineUsers.push(username);
        console.log('users', onlineUsers)
        
        //Save the username as key to access the user's socket id
        onlineUsers[username] = socket.id;
        socket['username'] = username;
        io.emit('new-user', username);
    })

    socket.on('user joined', (username) => {
        console.log(`${username} has joined the chat`);
        //Save the username as key to access the user's socket id
        onlineUsers[username] = socket.id;
        socket['username'] = username;
        io.emit('user joined', username);
    })
    socket.on('get online users', () => {
        //Send over the onlineUsers
        socket.emit('get online users', onlineUsers);
    })


    console.log('A user connected');

    socket.on('disconnect', () => {
        let username = socket.username;
        delete onlineUsers[username]
        io.emit('user has left', onlineUsers);
        console.log(` A user disconnected`);
    }); 
})


http.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
});

