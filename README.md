# Real-Time Web 

## Het Process
Voor deze cursus moeten we een chat ontwikkelen die in real time data ontvangt en uitdeelt (je kunt de data direct zien). Om te beginnen met deze cursus krijgen we de opdracht om samen als team aan de slag te gaan met het bouwen van een chatapplicatie. Zodat we een sterke basis hebben om te beginnen en dan kunnen we onze eigen functionaliteiten toevoegen om deze cursus te halen. Deze opdracht is behoorlijk tijdrovend, omdat we met dit project op maandag beginnen en de volgende dag (dinsdag) de opdracht moeten voltooien en feedback van de docenten moeten krijgen.

## Live Demo Links
<!-- 	Stabiele versie -->
- https://real-time-web-2223-production-287b.up.railway.app/
- https://realtime-webapp.adaptable.app/

---
# Inhoudsopgave
- [Het Process]()
- [Live Demo Links]()
- [Applicatie Installatie]()
- [Proof of Concept]()
  - [Idee 1: Guess the disney Character]()
  - [Idee 2: Woordenboek generator chat]()
  - [Idee 3: Watch together app]()
- [Het Concept]()
- [Dictionary  generator chat app]()
- [Functionaliteiten]()
- [Hoe gebruik je de App]()
- [Free Dictionary Api]()
- [Data Modeling]()
- [Data Life cycle Diagram]()
- [Real time Events]()
---
## Applicatie installatie
Om dit applicatie te installeren en gebruiken moet je een paar stappen doorlopen. 

### Wat heb je nodig:
- NPM
- node
- Express
- socket.io
- Nodemon
- ejs
- adaptable.io
- raillway.app


### NPM  Dependencies
- Nodemon
- Express
- socket.io 
- ejs

### Clone repository

    git clone https://github.com/K3A101/css-to-the-rescue-2223.git

### NPM Installeren

    npm install

### Applicatie starten in developement

    npm run dev

### Applicatie te starten

    npm start

### Applicatie deployen
Om de applicatie live te zetten heb ik adaptable.io hosting platform gebruikt. Ik heb deze gebruikt omdat het ondersteund websocket. Je kan ook andere hosting platform gebruiken zoals railway.

---
## Express Server implementeren
Om een express server te implementeren moet je eerst de express module installeren. Dit kan je doen door de volgende commando in je terminal te typen.

```
npm install express
```

Om de express server te starten moet je de volgende code in je server.js bestand typen.
```javascript
	const express = require('express');
	const app = express();
	const port = 3000;
	
	app.use(express.static('public'));
	
	app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
	})


```
## Socket.io implementeren
Om socket.io te implementeren moet je eerst de socket.io module installeren. Dit kan je doen door de volgende commando in je terminal te typen.

	npm install socket.io

Om de socket.io server te starten moet je de volgende code in je server.js bestand typen.

<details>
<summary> De code</summary>


```javascript

	const express = require('express');
	const app = express();
	const port = 3000;
	
	app.use(express.static('public'));
	
	const server = app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
	})
	
	const io = require('socket.io')(server);
	
	io.on('connection', (socket) => {
	  console.log('a user connected');
	});

```
</details>

## Nodemon implementeren
Om nodemon te implementeren moet je eerst de nodemon module installeren. Dit kan je doen door de volgende commando in je terminal te typen.

	npm install nodemon

Om de nodemon server te starten moet je de volgende code in je package.json bestand typen.

	"scripts": {
	    "dev": "nodemon  -L app.js"
	  },

## EJS implementeren
Om EJS te implementeren moet je eerst de EJS module installeren. Dit kan je doen door de volgende commando in je terminal te typen.

	npm install ejs

Om de EJS server te starten moet je de volgende code in je server.js bestand typen.

	app.set('view engine', 'ejs');


---

## Proof of concept
Wat is een proof-of-concept. Proof of concept is een ontwerpmethode waarbij je nadenkt over drie mogelijke ideeën die kunnen worden geïmplementeerd. In mijn geval gebruik ik deze methode om drie concepten te creëren voor mijn real-time webapplicatie te bouwen. Voor elk concept maak ik een ruwe schets zodat mensen mijn ideeën beter kunnen begrijpen. En om ze te visualiseren. 

## Idee 1: Guess the disney character
Voor mijn eerste idee wil ik de Disney API gebruiken. Met deze API wil ik een multiplayer-game maken waarin spelers de Disney-personages kunnen raden. Voordat het spel begint, kan de speler een unieke gebruikersnaam aanmaken. Vervolgens worden alle geregistreerde spelers naar een kamer geleid. Als je de kamer binnenkomt, zie je een foto van een Disney-personage en een chatgedeelte. Iedereen typt zijn antwoord in de chat. De speler die het juiste antwoord raadt, krijgt een confetti op zijn scherm en een score. Na de viering. Het spel gaat verder en genereert nog een afbeelding van een personage, enzovoort.

### API = Disney Api
Hier is de link naar de [documentatie](https://disneyapi.dev/docs/)


![Idea 1](readme-images/idea1.png)

### Functionaliteiten
- Spelers kunnen unieke gebruikersnaam maken
- Spelers kunnen met elkaar communiceren 
- Je kan zien hoeveel mensen momenteel online is
- Het spel bevat een score bord
- You can see how many players are online
- Eeen evet waar confettis worden gestoten voor de winnaar
- Disney karakters afbeeldingen worden uit de API gehaald. 

## Idee 2: Woordenboek generator chat
Mijn tweede idee is een chat waarbij  een groep mensen samen een  betekenis van het woord in een group chat genereert. Dus Iedereen kan een woord intypen en ze krijgen op basis darvan verschillende informatie over het woord zoals bij een woordenboek. Iedereen kunnen een hun  woordenlijst opstellen, door hun favoriete woorden in een lijstje op te slaan.


### API =   Free Dictionary APi
Hier is de link naar de [documntatie](https://dictionaryapi.dev/).

![Idee 2 schets](readme-images/idee-2-schets.jpg)


### Functionaliteiten
- Gebruikers kunnen unieke gebruikersnaam maken
- Gebruikers kunnen met elkaar communiceren in een groupchat
- Je kan zien hoeveel mensen momenteel online is
- Moet comncrete informatie geven van het woord'
- Gebruikers kunnen hub woorden opslaan in een woordenlijst
  

## Idee 3 - Watch together App
Het laatste concept is een app waar mensen gezamenlijk review kan geven over een boek of film.  Dus mensen kunnen een boek/film kiezen die ze willen beoordelen. En daarna in een forum feedback plaatsen.  Ik heb ook een andere idee een soort van live chat te geven waarmee gebruikers commentaren kan plaatsen terwijl ze  live een fragment bekijk. Denk aan facebook live.

### API - Goodreads API

---
# Het concept
## Dictionary generator chat
Dictionary cahat oftewel DictoChat is een chat applicatie waar een groep mensen met elkaar kan praten in een chatroom. Ook knnen ze een betekenis van het woord genereren. 

Voor mijn eindopdracht heb ik het woordenboek idee gekozen. Maar het idee is wel een beetje aangepast. Wat het inhoudt is dat  groep mensen komen in een chatroom terecht en dan kunnen ze op basis van een woord die ze hebben ingevuld een overzicht maken met woordenboek eigenschappen. In principe is de woordenboek generator een chat waar gebruikers met elkaar kunnen praten maar teglijkertijd de betekenis wan het woord zien. Aan de zijkant staat de gebruikerslijst. In de lijst staan alle gebruikers die aangemeld zijn in de Chat. Verder kunnen anderen zien wie momemnteel online is. 

## Schetsen

![Idee 2 schets](readme-images/idee-2-schets.jpg)
![Idee 2 schets](readme-images/concept-wireflow.jpg)


## Core Functionaliteiten 
- [x] Gebruikers kunnen gebruikersnaam maken
- [x] Gerbruikers komen op een gebruikerslijst komen te staan
- [x] Je kan zien wie online is.
- [x] Gebruikers kunnen met elkaar communiceren in een groupchat.
- [x] Gebruikers kunnen woorden invullen om de beschrijving te genereren
- [x] Moet concrete informatie geven van het woord'
- [x] Kijken wie er bijgekomen is in de chat
- [x] Kijken wie uit de chat Weggegaan zijn
- [X] Je kan zien welke gebruiker aan het type is

## Must have
- [x] Gebruikers kunnen gebruikersnaam maken
- [x] Gerbruikers komen op een gebruikerslijst komen te staan
- [x] Je kan zien wie online is.
- [x] Gebruikers kunnen met elkaar communiceren in een groupchat.
- [x] Gebruikers kunnen woorden invullen om het definitie te genereren
- [x] Moet concrete informatie geven van het woord'
- [ ] Berichten worden opgeslagen
- [ ] Data life cycle diagram
- [ ] 

## Should have
- [ ] Instructie hoe je de app gebruikt
- [x] Moet werkend zijn op mobiel
- [ ] Offline ondersteuning 
- [ ] 
## Could have
- [ ] Gebruikers kunnen in room gaan
- [ ] Gebruikers krijgen notifactie dat iemand is daarbij gekomen
- [ ] Gebruikers kunnen hun woorden opslaan in een woordenboeklijst
- [ ] Gebruikers kunnen de beschrijving van de woord kopieren met een button 

## Would have but not right now
- [ ] Een melding die aangeeft dat er geen informatie kunnen vinden van het woord.
- [ ] Aangeven hoelaat de berichten zijn gestuurd.

## Technieken
- [x] De gebruikersnaam pagina verbergen wanneer de gebruiker op de button klikt
- [x] Een overzicht van de woord naast de chat
- [x] Een plek waar je de woord kan invoeren
- [x] Een overzicht lijst met alle gebruikers die nu in de room is

## Hoe gebruik je de app?
### Een gebruikersnaam aanmaken
Wanneer de gebruiker naar de homepagina terecht komt, kunnen ze een gebruikersnaam aanmaken. Wanneer ze de `join chat` klikt, wordt de gebruikersnaam formulier verbergt en de chat container wordt zichtbaar.
![Homepagina](readme-images/home-page.png)

### In de Chatroom gaan 
Je gaat naar de chatpagina en het eerste wat je ziet is een bericht dat je bij is gekomen in de chat. Iedereen die al was ingelogd kun dit bericht zien. 

![Gebruiker bijgekomen](readme-images/chat-room.png)

### Met elkaar berichten sturen
Wanneer iedereen in de chat stuurt kunnen ze  normaal naar elkaar berichten sturen. 

![Chat Functionality](readme-images/chatting-functionality.png)

### Definitie van het woord genereren
Naast dat je met elkaar berichten kunnen sturen, kun je de definitie van het woord krijgen. Om dit functionaliteit te gebruiken moet je een word in de chat versturen, na enkele seconde komen het definitie van het woord tevoorschijn. Als je het wilt kun je de betekenis  van het woord kopieren.

![Chat Functionality](readme-images/generate-words.png)

---
# API
## Free dictionary API
Om mijn concept aan de praat te krijgen ga ik de Free API Dictionary Api gebruiken. Hoe de Api werkt is dat het woord die je invult, word dan je endpoint. Verder wordt via de endpoint een array gegeneert met verschillende eigenschappen van het woord. Hieronder is er een voorbeeld van de een woord.

### Eindpont van het woord hello
`GET https://api.dictionaryapi.dev/api/v2/entries/en/hello`

### De response
Dit is wat je terugkrijgt vanuit de API. 
Om de response overzicht te krijgen heb ik insomia.rest gebruikt. 
![Insomia.rest](readme-images/insomia.rest.png)
<details>
<summary> Het structuur van de API</summary>

```json
[
	{
		"word": "hello",
		"phonetics": [
			{
				"audio": "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
				"sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=75797336",
				"license": {
					"name": "BY-SA 4.0",
					"url": "https://creativecommons.org/licenses/by-sa/4.0"
				}
			},
			{
				"text": "/həˈləʊ/",
				"audio": "https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3",
				"sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9021983",
				"license": {
					"name": "BY 3.0 US",
					"url": "https://creativecommons.org/licenses/by/3.0/us"
				}
			},
			{
				"text": "/həˈloʊ/",
				"audio": ""
			}
		],
		"meanings": [
			{
				"partOfSpeech": "noun",
				"definitions": [
					{
						"definition": "\"Hello!\" or an equivalent greeting.",
						"synonyms": [],
						"antonyms": []
					}
				],
				"synonyms": [
					"greeting"
				],
				"antonyms": []
			},
			{
				"partOfSpeech": "verb",
				"definitions": [
					{
						"definition": "To greet with \"hello\".",
						"synonyms": [],
						"antonyms": []
					}
				],
				"synonyms": [],
				"antonyms": []
			},
			{
				"partOfSpeech": "interjection",
				"definitions": [
					{
						"definition": "A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.",
						"synonyms": [],
						"antonyms": [],
						"example": "Hello, everyone."
					},
					{
						"definition": "A greeting used when answering the telephone.",
						"synonyms": [],
						"antonyms": [],
						"example": "Hello? How may I help you?"
					},
					{
						"definition": "A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.",
						"synonyms": [],
						"antonyms": [],
						"example": "Hello? Is anyone there?"
					},
					{
						"definition": "Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.",
						"synonyms": [],
						"antonyms": [],
						"example": "You just tried to start your car with your cell phone. Hello?"
					},
					{
						"definition": "An expression of puzzlement or discovery.",
						"synonyms": [],
						"antonyms": [],
						"example": "Hello! What’s going on here?"
					}
				],
				"synonyms": [],
				"antonyms": [
					"bye",
					"goodbye"
				]
			}
		],
		"license": {
			"name": "CC BY-SA 3.0",
			"url": "https://creativecommons.org/licenses/by-sa/3.0"
		},
		"sourceUrls": [
			"https://en.wiktionary.org/wiki/hello"
		]
	}
]
```
</details>

## Hoe werkt de API in de Chat?

```javascript
sendMessage.addEventListener('click', (e) => {

    const typingUser = currentUser;
    e.preventDefault();
    let word = wordInput.value;
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        // fetch('/new-word' + word)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            socket.emit('wordData', data); //DE data opgehaald van de API wordt gestuurd naar de server
        }).catch(err => {
            console.log(err)
        })

    if (word.length > 0) {

        //Ik maak een array van object aan met de waarde van de username en de message
        const chat = {
            username: currentUser,
            message: word
        }
        //De chat message event wordt gestuurd met de chat array als parameter
        //De chat array bevat de username en de message
        socket.emit('chat message', chat); //verstuurd een chat message  event naar de server met de chat object array als data
        socket.emit('stop typing', typingUser);
        wordInput.value = '';
    }
})




```
### Toelichting
Dit is een click eventlistener op het verstuur button. In deze functie gebeurd er een paar dingen. Ten eerste de ingevulde woord wordt in `word` variabele opgeslagen. De waarde daarvan wordt gestuurd geplaatst in de API URL. Verder wordt de data die uit de API is opgehaald naar de server gestuurd  met de `wordData` event.  In de server wordt de data gestuurd naar alle verbonden client. Terug bij deze functie, de data wordt opgehaald. In dezelfe click event heb ik nog twee socket.io events togevoegd. 

In de chat message event worden de bericht die de huidige typt, naar de server getsuurd. De rest van de gebruiker in de chat kunnen dit bericht ook zien. Ook de typt indicatie gaat ook weg.

Dus is het kort, wanneer de gebruiker op de sendMessage button klikt, wordt berichten aan elkaar gestuurd, maar ook de betekenis van bepaalde woord wordt opgehaald en naar alle verbonden client gestuurd. Het wordt ook aangeven bij de rest dat de persoon is gestopt met typen. 

---

## Data modeling
### Versie 1
![data modeling schets versie 1](readme-images/data-modeling-schets.jpg)


### Versie 2

## Data Lifecycle Diagram
### Versie 1
![Data cycle Diagram versie 1](readme-images/data-cycle-diagram-v1.png)

### Versie 2
![Data cycle diagram versie 2](readme-images/data-cycle-diagram-v2.png)
---
# Real time events
Voor het communicatie tussen de server en de clients.  Heb ik verschillende real time events gemaakt.
- `new-user` Event wordt uigevoerd Wanneer de gebruiker een nieuwe gebruiker aanmaakt
- `user joined` Event die aangeeft dat een user is in de chat bijgekomen
- `get online users` Met deze event worden de aangemelde gebruikers in de server opgeslagen in een lijst komen te staan.
- `typing` Event die laat zien dat een gebruiker aan het typen is.
- `stop typing` Event wanneer  de gebruiker gestopt is met typen
- `wordData` Event die de API data wordt naar de server gestuurd om dan naar alle clients te sturen
- `chat message` Event waar de gebrikers met elkaar berichten kan sturen in een chat room
- `chat history` Maximaal 50 berichten worden opgeslagen, de nieuwe gebruikers die nog binnen komen kunnen alsnog de oude berichten zien. 
- `word descripton history` geld ook bij de woord definities, maximaal 50 stukjes worden in de server bewaard. 
- `connect` De event ga checken of de applicatie verbinding heeft met de server. Als er geen verbinding is word een bericht getsuurd naar de gebruikers dat hij offline is. 

 ## Real time event 
<details>
<summary>new-user</summary>

### Nieuwe gebruiker

### Socket event: New user
Hier ga de gebruiker een gebruikersnaam aanmaken. Wanner ze op de knop klikt, wordt twee events naar de server gestuurd. Met de user joined event wordt het zichtbaar voor de gebruiker wie in de chat is aangekomen. 
Wanneer een nieuwe gebruiker in de chat komt wordt de `new user` event gestuurd van de client naar de server. De server  luistert naar de `new user` event en als er een nieuwe gebruiker een username geeft, wordt de event naar alle clients gestuurd dat er een gebruiker is erij gekomen.

#### Client
```javascript
//client
const usernameForm = document.querySelector('.username-form');
const usernameInput = document.querySelector('#username-input');
let currentUser;
// event wordt verstuurd naar de server
createUserBtn.addEventListener('click', (e) => {
    e.preventDefault();
    backBtn.classList.remove('hide-back-btn');
    // const usernameInput = document.querySelector('#username-input');
    const username = usernameInput.value.trim();
    if (username.length > 0) {
        socket.emit('new-user', username);
        socket.emit('user joined', username);
        currentUser = username;
        usernameForm.classList.add('hidden');
        chat.classList.remove('hidden');
    }

    console.log('New user created')

});

//client 
socket.on('new-user', (username) => {
    console.log(username + ' has joined the chat');
    let user = document.createElement('li');
    user.innerHTML = `${username}`;
    userList.appendChild(user);
});

```
#### Server
```javascript
let onlineUsers = {};
console.log('onlineUsers', onlineUsers)
// server
    socket.on('new-user', (username) => {
        console.log(`${username} has joined the chat`);
        //Save the username as key to access the user's socket id
        onlineUsers[username] = socket.id;
        socket['username'] = username;
        io.emit('new-user', username);
    })
```


</details>

<details>
<summary>user joined</summary>

### User is bijgekomen

#### Socket event: user joined
Dit event wordt uitgevoerd naast de new user event. Wanneer de gebruiker een naam heeft gemaakt,  wordt hij verstuurd naar de chat room. Iedereen die al in de chat room zijn krijgen een melding dat een nieuwe gebruiker is bijgekomen. 

#### client 
```javascript
const createUserBtn = document.querySelector('#create-user-btn');
const usernameForm = document.querySelector('.username-form');
const usernameInput = document.querySelector('#username-input');
let currentUser;

createUserBtn.addEventListener('click', (e) => {
    e.preventDefault();
    backBtn.classList.remove('hide-back-btn');
    // const usernameInput = document.querySelector('#username-input');
    const username = usernameInput.value.trim();
    if (username.length > 0) {
        socket.emit('new-user', username);
        socket.emit('user joined', username);
        currentUser = username;
        usernameForm.classList.add('hidden');
        chat.classList.remove('hidden');
    }

    console.log('New user created')

});

socket.on('user joined', (username) => {
    console.log(username + ' has joined the chat');
    let user = document.createElement('li');
    user.innerHTML = `${username} has joined the chat`;
    chatContainer.appendChild(user);
});


```
#### Server
```javascript
let onlineUsers = {};
console.log('onlineUsers', onlineUsers)

socket.on('user joined', (username) => {
        console.log(`${username} has joined the chat`);
        //Save the username as key to access the user's socket id
        onlineUsers[username] = socket.id;
        socket['username'] = username;
        io.emit('user joined', username);
    })
```
</details> 

<details>
<summary>Get online users</summary>

### Lijst met alle online gebruikers

#### Socket event: get online users
De gebruikers met een naam worden dan opgeslagen naar de server onder de get online event. De Opgeslagen gebruikersnamen worden vanuit de server opgehaald en naar de client toegestuurd. Dus wanneer de gebruiker naar de homepagina komt, kunnen ze alle online gebruikers zien die momenteel in de chat zijn. 

#### client
```javascript
const userList = document.querySelector('#user-online');
let currentUser;
socket.emit('get online users')


socket.on('get online users', (onlineUsers) => {
    userList.innerHTML = '';
    for (username in onlineUsers) {
        let user = document.createElement('li');
        user.innerHTML = `${username} is online`;
        userList.appendChild(user);
    }
});

```
#### Server
```javascript
let onlineUsers = {};
console.log('onlineUsers', onlineUsers)

socket.on('get online users', () => {
//Send over the onlineUsers
socket.emit('get online users', onlineUsers);
})


```
</details> 
<details>
<summary>typing</summary>

### Gebruiker is aan het typen

#### Socket event: typing
Dit is een event die aangeeft welke gebruiker een bericht aan het typen is. Ik heb een variabele `typingUser`gemaakt dat de huidige client dus mijn client opslaan. Dus de aangemaakte gebruikersnaam wordt gekoppeld met nieuwe variabele. Dus wanneer de gebruiker begint met typen wordt de typing event getriggerd en naar de server gestuurd. In de server word de typing event gestuurd naar alle gebruikers behalve degene die aan het typen is. 

#### Client
```javascript
const wordInput = document.querySelector('#word-input');
let currentUser;
socket.emit('get online users')

wordInput.addEventListener('input', (e) => {
    let input = wordInput.value;
    e.preventDefault();
    const typingUser = currentUser;
    socket.emit('typing', typingUser);
})

socket.on('typing', (typingUser) => {

    // const typingIndicator = document.createElement('div');
    typingIndicator.innerHTML = `${typingUser} is typing...`;
    console.log(`${typingUser} is typing...`);
    console.log('User is typing')
})
```

#### Server
```javascript
   socket.on('typing', (typingUser) => {
        // io.emit('typing', typingUser);
        socket.broadcast.emit('typing', typingUser);
        console.log(`${typingUser} is typing`);
    })

```
</details> 
<details>
<summary>Stop typing</summary>

### Gebruiker is niet meer aan het typen

#### Socket event: stop typing
Zoals je tijdens het een chatten, een melding zien dat een andere gebruiker aan het typen is, kun je met de `stop typing `event zien dat een gebruiker is gestopt met schrijven. Dus wanneer de gebruiker het bericht verstuurt ga de *user is typing* weg. Dit event wordt gestuurd naar alle gebruikers in de chat behalve degene die aan het typen was. 

#### Client
```javascript
const sendMessage = document.querySelector('#submit-button');
sendMessage.addEventListener('click', (e) => {

    const typingUser = currentUser;
    e.preventDefault();
    let word = wordInput.value;
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        // fetch('/new-word' + word)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            socket.emit('wordData', data); //DE data opgehaald van de API wordt gestuurd naar de server
        }).catch(err => {
            console.log(err)
        })

    if (word.length > 0) {

        //Ik maak een array van object aan met de waarde van de username en de message
        const chat = {
            username: currentUser,
            message: word
        }
        //De chat message event wordt gestuurd met de chat array als parameter
        //De chat array bevat de username en de message
        socket.emit('chat message', chat); //verstuurd een chat message  event naar de server met de chat object array als data
        socket.emit('stop typing', typingUser);
        wordInput.value = '';
    }
})

socket.on('stop typing', (typingUser) => {
    typingIndicator.innerHTML = '';
    console.log(`${typingUser} has stopped typing...`);
    console.log('User has stopped typing');

})


```
#### Server 

```javascript
    socket.on('stop typing', (typingUser) => {
        // io.emit('typing', typingUser);
        socket.broadcast.emit('stop typing', typingUser);
        console.log(`${typingUser} stopped typing`);
    })


```
</details>
<details>
<summary>Chat message</summary>

###  De chat, de core onderdeel van dit applicatie

#### Socket event: chat message
De chat message event is de basis van de hele applicatie, verschillende gebruikers met elkaar communiceren in chat room. Per bericht kunnen  alle gebruikers zien wie de zender van het bericht is. In het event wordt de berichten en de zender naar de server gestuurd. En via de server wordt het met socket.io verstuurd naar alle gebruikers die in de chat zijn. 

Wat ik hier doe is ik sla de waarde van wat er ingetypt is op in `word`. Wanneer er er meer dan 1 dingen ingetypt wordt en de gebruiker op de verstuur knop klikt, ga de waarde naar de server toe onder de chat message event. 

#### client
```javascript
const wordInput = document.querySelector('#word-input');
const sendMessage = document.querySelector('#submit-button');
sendMessage.addEventListener('click', (e) => {

    const typingUser = currentUser;
    e.preventDefault();
    let word = wordInput.value;
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        // fetch('/new-word' + word)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            socket.emit('wordData', data); //DE data opgehaald van de API wordt gestuurd naar de server
        }).catch(err => {
            console.log(err)
        })

    if (word.length > 0) {

        //Ik maak een array van object aan met de waarde van de username en de message
        const chat = {
            username: currentUser,
            message: word
        }
        //De chat message event wordt gestuurd met de chat array als parameter
        //De chat array bevat de username en de message
        socket.emit('chat message', chat); //verstuurd een chat message  event naar de server met de chat object array als data
        socket.emit('stop typing', typingUser);
        wordInput.value = '';
    }
})

socket.on('chat message', (chat) => {
    addChatMessage(chat);

})

function addChatMessage(chat) {
    const speechBubble = document.createElement('li');
    speechBubble.innerHTML = `<span>${chat.username}</span>${chat.message}`;
    console.log(`${chat.username}: ${chat.message}`);

    chatContainer.appendChild(speechBubble);
    // De scroll wordt naar beneden gezet zodat de laatste berichten zichtbaar zijn
    chatContainer.scrollTop = chatContainer.scrollHeight;

    console.log('chat message received')
    //Als de username van de chat message gelijk is aan de username van de input dan wordt de class 'own-message' toegevoegd
    //Deze class zorgt ervoor dat de speech bubble aan de rechterkant van het scherm wordt geplaatst
    if (chat.username === usernameInput.value) {
        speechBubble.classList.add('own-message');
    }
}

```

### server
```javascript

    socket.on('chat message', (chat) => {

        while (chatHistory.length >= historySize) {
            chatHistory.shift();
        }
        chatHistory.push(chat);

        io.emit('chat message', chat);
        console.log(`${chat.username}: ${chat.message}`);
    })

```
</details>
<details>
    <summary>Chat History</summary>

### Oude berichten

#### Socket event: Chat History
Dit event zorgt ervoor dat er maximaal 50 berichten opgeslagen worden in de server. Het voordeel hiervan is dat nieuwe gebruiker die later in het chat zijn bijgekomen, kunnen als nog oude berichten zien. In de server heb ik in de historySize de hoeveelheid berichten wil ik opslaan en een lege chat history array om de berichten daarin te bewaren. Vanuit de server wordt de chat history event naar de clients gestuurd.

#### Client

```javascript
socket.on('chat history', chatHistory => {
    chatHistory.forEach(chat => {
        addChatMessage(chat);
    })
})


function addChatMessage(chat) {
    const speechBubble = document.createElement('li');
    speechBubble.innerHTML = `<span>${chat.username}</span>${chat.message}`;
    console.log(`${chat.username}: ${chat.message}`);

    chatContainer.appendChild(speechBubble);
    // De scroll wordt naar beneden gezet zodat de laatste berichten zichtbaar zijn
    chatContainer.scrollTop = chatContainer.scrollHeight;

    console.log('chat message received')
    //Als de username van de chat message gelijk is aan de username van de input dan wordt de class 'own-message' toegevoegd
    //Deze class zorgt ervoor dat de speech bubble aan de rechterkant van het scherm wordt geplaatst
    if (chat.username === usernameInput.value) {
        speechBubble.classList.add('own-message');
    }
}

```

#### Server

```javascript
const historySize = 50;
let chatHistory = [];

    socket.on('chat message', (chat) => {

        while (chatHistory.length >= historySize) {
            chatHistory.shift();
        }
        chatHistory.push(chat);

        io.emit('chat message', chat);
        console.log(`${chat.username}: ${chat.message}`);
    })

```

</details>
<details>
    <summary>wordData</summary> 
	
### Gegenereerde woorden uit de API

#### Socket event: wordData
 De woorden die de gebruiker typt wordt tegelijkertijd gestuurd naar de API, De API stuur de data terug naar de client en de client stuurt data naar de server met de `wordData` event. De server stuurt de data naar de clients en in de client wordt de data weergegeven. Wat wordt weergegven is de woord spelling, audio, en het definitie. Niet alle woorden kunnen gegenereerd worden dus de fallback is dat het een gewone chat wordt. 

 #### client
```javascript
const wordInput = document.querySelector('#word-input');
const sendMessage = document.querySelector('#submit-button');
sendMessage.addEventListener('click', (e) => {

    const typingUser = currentUser;
    e.preventDefault();
    let word = wordInput.value;
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        // fetch('/new-word' + word)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            socket.emit('wordData', data); //DE data opgehaald van de API wordt gestuurd naar de server
        }).catch(err => {
            console.log(err)
        })

    if (word.length > 0) {

        //Ik maak een array van object aan met de waarde van de username en de message
        const chat = {
            username: currentUser,
            message: word
        }
        //De chat message event wordt gestuurd met de chat array als parameter
        //De chat array bevat de username en de message
        socket.emit('chat message', chat); //verstuurd een chat message  event naar de server met de chat object array als data
        socket.emit('stop typing', typingUser);
        wordInput.value = '';
    }
})

function displayData(data) {
    const randomIndex = Math.floor(Math.random() * data[0].meanings[0]?.definitions.length);
    const definition = data[0].meanings[0]?.definitions[randomIndex].definition || 'No definition available';
    const word = data[0].word;
    let audioUrl = 'No audio available'; // Als er geen audio beschikbaar is, wordt de audioUrl op 'No audio available' gezet

    for (let i = 0; i < data[0].phonetics.length; i++) {
        if (data[0].phonetics[i].audio) {
            audioUrl = data[0].phonetics[i].audio;
            break;
        }
    }

    let phonetics = 'No phonetics available'
    for (let t = 0; t < data[0].phonetics.length; t++) {
        if (data[0].phonetics[t].text) {
            phonetics = data[0].phonetics[t].text || data[0].phonetic;
            break;
        }
    }

    let html = '';

    html = `
    <li class="word">
         <h2>${word}</h2>
         <p>${phonetics}</p>  
        <audio
         controls
            <source src="${audioUrl}" type="mp3/ogg">
        </audio>
       <figcaption>${audioUrl}</figcaption>
       <p class="word-definition">${definition}</p>
       <button class="copy-word-btn">Copy the description</button>
       <div class="copied-confirmation"></div>
    </li>`

    wordsDictionarySection.insertAdjacentHTML('beforeend', html);

    copyText();

}


socket.on('wordData', (data) => {
    console.log(data);
    displayData(data)

    wordsDictionarySection.scrollTop = wordsDictionarySection.scrollHeight;

})

```

#### Server

```javascript
 socket.on('wordData', (data) => {
        io.emit('wordData', data);

        while (wordDescriptionHistory.length >= historySize) {
            wordDescriptionHistory.shift();
        }
        wordDescriptionHistory.push(data);
        console.log(data);
    })


```
</details> 
<details>
<summary>Word Description History</summary>

### Eerdere opgeslagen woord definities

#### Socket event: Word description history
Dit event zorgt ervoor dat er maximaal 50 woord definities opgeslagen worden in de server. Het voordelen hiervan is dat nieuwe gebruiker die later in het chat zijn bijgekomen, kunnen als nog eerder gegenereerde defiities zien. In de server heb ik in de historySize de hoeveelheid definities wil ik opslaan en een lege `word description history`array gemaakt om de difinities daarin te bewaren. Vanuit de server wordt de `word description history` history event gestuurd naar de client. In de client wordt de eerste 49 stukjes bewaard. Ouder dan dat gaan ze vanzelf weg. 
#### Client
```javascript

function displayData(data) {
    const randomIndex = Math.floor(Math.random() * data[0].meanings[0]?.definitions.length);
    const definition = data[0].meanings[0]?.definitions[randomIndex].definition || 'No definition available';
    const word = data[0].word;
    let audioUrl = 'No audio available'; // Als er geen audio beschikbaar is, wordt de audioUrl op 'No audio available' gezet

    for (let i = 0; i < data[0].phonetics.length; i++) {
        if (data[0].phonetics[i].audio) {
            audioUrl = data[0].phonetics[i].audio;
            break;
        }
    }

    let phonetics = 'No phonetics available'
    for (let t = 0; t < data[0].phonetics.length; t++) {
        if (data[0].phonetics[t].text) {
            phonetics = data[0].phonetics[t].text || data[0].phonetic;
            break;
        }
    }

    let html = '';

    html = `
    <li class="word">
         <h2>${word}</h2>
         <p>${phonetics}</p>  
        <audio
         controls
            <source src="${audioUrl}" type="mp3/ogg">
        </audio>
       <figcaption>${audioUrl}</figcaption>
       <p class="word-definition">${definition}</p>
       <button class="copy-word-btn">Copy the description</button>
       <div class="copied-confirmation"></div>
    </li>`

    wordsDictionarySection.insertAdjacentHTML('beforeend', html);

    copyText();

}

socket.on('word description history', wordDescriptionHistory => {
    wordDescriptionHistory.forEach(data => {
        displayData(data);
    })
})
```

#### Server 
```javascript
const historySize = 50;
let wordDescriptionHistory = [];
 socket.on('wordData', (data) => {
        io.emit('wordData', data);

        while (wordDescriptionHistory.length >= historySize) {
            wordDescriptionHistory.shift();
        }
        wordDescriptionHistory.push(data);
        console.log(data);
    })


```
</details>
<details>
<summary>Users has left</summary>

### Gebruiker heeft de chat verlaten

#### Socket event: user has left
Je bent klaar met chatten en je gaat offline. Dan word de disconnect event uit de server uitgevoerd. Wanneer een gebruiker weggaat, wordt alle gebruikers uit de chat weggehaald. Als ik tijd had zou ik alleen de offline gebruiker uit de online lijst. In de chat krijg je een melding welke gebruikers uit de chat zijn gegaan. 

#### Client
```javascript
const chatContainer = document.querySelector('#chat-messages');


socket.on('user has left', (onlineUsers) => {
    userList.innerHTML = '';
    for (username in onlineUsers) {
        let user = document.createElement('li');
        user.innerHTML = `${username} has left the chat`;
        chatContainer.appendChild(user);

    }
});


```

#### Server
```javascript
let onlineUsers = {};
console.log('onlineUsers', onlineUsers)

    socket.on('disconnect', () => {
        let username = socket.username;
        delete onlineUsers[username]
        io.emit('user has left', onlineUsers);
        console.log(` A user disconnected`);
    }); 
```
</details>
<details>
<summary>Connect</summary>

### Geen verbinding  met de server

#### Socket event: Connect
Met deze event wordt na elke miliseconde in de client gechekt of er verbinding is met de server. Als de verbinding uitvalt, wordt een bericht dat de gebruiker in de hoogte brengen dat hij offline is. Wanneer de werbinding terug komt gaat de class weg. 

#### Client
```javascript

socket.on('connect', () => {
    checkSocketConnection();
    setInterval(checkSocketConnection, 500);

})

function checkSocketConnection() {

    if (socket.connected) {
        console.log('Socket is connected');
        chat.classList.remove('socket-disconnected');

    } else {
        console.log('Socket is disconnected');
        chat.classList.add('socket-disconnected');

        setTimeout(() => {

            if (!socket.connected) {
                const error = document.querySelector('#error');
                error.innerText = 'You are disconnected';
                error.classList.add('show');

            }

        }, 5000);

    }

}

```

```css
.socket-disconnected {
    border: none;
    padding: 10px;
    background-color: #f8d7da;
    color: #721c24;

}

.socket-disconnected::before {
    content: "You are offline.";
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
}
```

</details>





 
---

# Bronnen


## ⚖ License
[MIT](https://github.com/K3A101/real-time-web-2223/blob/main/LICENSE) 
