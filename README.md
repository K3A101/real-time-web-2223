# Real-Time Web @cmda-minor-web 2022 - 2023

## 🏫 Course 
For this course we have to develop an chat that receives and gives out data in real time (you can see the data immediately). To start off with this course, we are given the assignment to start building an chat application together as a team. So that we have a strong base to start off and then we can add our own functionalities to pass this course. This assignment is quite time restricting, because we start off with this project on Monday and the next day (Tuesday) we have to complete the assignment and receive feedback from the teachers.

## 🤔 Concept

## Proof of concept
What is proof of concept. Proof of concept is an design method where you think about three potential ideas that can be implemented.  In my case I am using this method to create three concept for my real time web application. For Each concept I will make a rough sketch so people can understand my ideas better.  And to visualize them. 

## Idea 1
For my first idea, I want to use the disney API. With this API i would like to make a multiplayer game where players can guess the disney characters. Before the game begins, the player can make an unique username.  Then every registered players will be directed to a room.  When you get in the room, you will see a picture of a disney character and a chat section. Everyones types their answer in the chat. The player that guesses the correct answer wil get an confetti on his screen and a score. After the celebration. The game continues and generates another picture of a character and so on. 

![Idea 1](readme-images/idea1.png)

### Features
- Players can have a unique nickname
- Players can chat with eachother 
- Players can create nicknames
- A score board
- You can see how many players are online
- A celebration event for the winner
- Disney characters that are fetched from the Disney API. 

## Idea 2 
The second idea is..


## Idea 3 

## ✏️ Sketches / design

### Sketch
![image 1](https://user-images.githubusercontent.com/94360732/232487129-7857ca76-19d2-41d1-80d1-c9af0ead5c89.png)

### LoFi prototype
![iPhone 14 - 1](https://user-images.githubusercontent.com/94360732/232489788-bcc8ba8a-e43b-47a3-89cf-1da7c4f038aa.png)

### HiFi prototype


## 🪆 MoSCoW

### Must have
- Chat with multiple users
- Receive and send real time data

### Should have
- See each others names
- See the date
- Nice UI

### Could have
- The time of the message that is sent

### Would have
- You can see the other user is typing a message


## 🛠️ Used tools
- Npm
- Nodejs
- Express
- Template engine ejs
- Socket.io

## ⚙️ Installation
Clone repo

``` 
Git clone https://github.com/RainbowJM/real-time-web-2223.git
```

NVM install 

```
nvm install 19.8.1
```

Express install
```
npm install express
```
EJS install

``` 
npm install ejs

```
Socket.io install 

```
npm install socket.io

```

Start application 

``` 
npm start
```

## 🛣️ Express + route 
Here we are importing express and building our own route. We are only building an one page application for now, so that's why we will only have one routing path. 

```
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});


module.exports = router;

```
## ⏰ Real time / Socket.io events 
In real time / Socket.io the events are kind of different than javascript. Here we use specifiek events to receive and send different data.

**.emit**
Here the admin sends different kind of data to the users. You can simply use the .emit behind the given function. (example: socket.emit("hello", "world"); )

**Connection**
This event is the main event. It's performs when a user makes a new connection with the server. This is the connection with the socket.

**User connect**
This event gets triggered when a new user is connecting with the game. It sends the username and triggers a join message with the username so everyone in the game can see who joined.

**Message**
This event is performed when a user wants to send a message in the chat, this can be to chat with others or to guess the answer for the game.

**Get data ( new character )**
This events gets triggered when the user enters the chat after sending their username. The marvel API data will be collected and filtered and a random item from the array will be shown. It gets triggered again after the former question gets answered right.

**Answer**
When a user is attempting to guess the right answer, this event gets triggered. When a chat message is send, it will be checked if the message contains the right answer. If this is the case, another message will be shown saying the right answer has been given.

**User left**
This event gets performed when a user leaves. It makes sure a message is sent that a user has left (with their username).

## ⚖ License
[MIT](https://github.com/RainbowJM/real-time-web-2223/blob/main/LICENSE) 
