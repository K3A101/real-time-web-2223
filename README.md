# Real-Time Web @cmda-minor-web 2022 - 2023

## 🏫 Course 
Voor deze cursus moeten we een chat ontwikkelen die in real time data ontvangt en uitdeelt (je kunt de data direct zien). Om te beginnen met deze cursus krijgen we de opdracht om samen als team aan de slag te gaan met het bouwen van een chatapplicatie. Zodat we een sterke basis hebben om te beginnen en dan kunnen we onze eigen functionaliteiten toevoegen om deze cursus te halen. Deze opdracht is behoorlijk tijdrovend, omdat we met dit project op maandag beginnen en de volgende dag (dinsdag) de opdracht moeten voltooien en feedback van de docenten moeten krijgen.

## 🤔 Concept

## Proof of concept
Wat is een proof-of-concept. Proof of concept is een ontwerpmethode waarbij je nadenkt over drie mogelijke ideeën die kunnen worden geïmplementeerd. In mijn geval gebruik ik deze methode om drie concepten te creëren voor mijn real-time webapplicatie te bouwen. Voor elk concept maak ik een ruwe schets zodat mensen mijn ideeën beter kunnen begrijpen. En om ze te visualiseren. 

## Idee 1: Guess the character
Voor mijn eerste idee wil ik de Disney API gebruiken. Met deze API wil ik een multiplayer-game maken waarin spelers de Disney-personages kunnen raden. Voordat het spel begint, kan de speler een unieke gebruikersnaam aanmaken. Vervolgens worden alle geregistreerde spelers naar een kamer geleid. Als je de kamer binnenkomt, zie je een foto van een Disney-personage en een chatgedeelte. Iedereen typt zijn antwoord in de chat. De speler die het juiste antwoord raadt, krijgt een confetti op zijn scherm en een score. Na de viering. Het spel gaat verder en genereert nog een afbeelding van een personage, enzovoort.

![Idea 1](readme-images/idea1.png)

### Functionaliteiten
- Spelers kunnen unieke gebruikersnaam maken
- Spelers kunnen met elkaar communiceren 
- Je kan zien hoeveel mensen momenteel online is
- Het spel bevat een score bord
- You can see how many players are online
- Eeen evet waar confettis worden gestoten voor de winnaar
- Disney karakters afbeeldingen worden uit de API gehaald. 

## Idee 2: Praten over bepaalde onderwerp
Het tweede idee is een applicatie waar de gebruiker een thema kan kiezen en alleen over die thema praten. Eeen soort van forum..


## Idee 3 

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
