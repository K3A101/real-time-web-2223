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
### Een woord in de  Input invullen?



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
 
 ### Nieuwe gebruiker
Wanneer een nieuwe gebruiker in de chat komt wordt de `new user` event gestuurd van de client naar de server. De server  luistert naar de `new user` event en als er een nieuwe gebruiker een username geeft, wordt de event naar alle clients gestuurd dat er een gebruiker is erij gekomen.

```javascript
//client
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

// server
    socket.on('new-user', (username) => {
        console.log(`${username} has joined the chat`);
        //Save the username as key to access the user's socket id
        onlineUsers[username] = socket.id;
        socket['username'] = username;
        io.emit('new-user', username);
    })


//client 
socket.on('new-user', (username) => {
    console.log(username + ' has joined the chat');
    let user = document.createElement('li');
    user.innerHTML = `${username}`;
    userList.appendChild(user);
});
```

### Online gebruikers 
De ingelogde gebruikers worden in de server opgeslagen in de onlineUser variabele. De opgeslagen gebruikers worden verstuurd onder de `get online user` event. De event word verstuurd naar alle clients. De Client luistert voor de event en zet de online gebruikers in een lijst. 

 ```javascript
 //client
 let currentUser;
socket.emit('get online users')
//server
     socket.on('get online users', () => {
        //Send over the onlineUsers
        socket.emit('get online users', onlineUsers);
    })

//client
 socket.on('get online users', (onlineUsers) => {
    userList.innerHTML = '';
    for (username in onlineUsers) {
        let user = document.createElement('li');
        user.innerHTML = `${username} is online`;
        userList.appendChild(user);
    }
});
 ```

 ### Chat bericht - chat message event
 De chat is helemaal opgebouwd op basis van de de woord die de gebruiker had ingevuld. Je kan met meerder mensen spreker maar je kan ook  met een woord, de  betekenis  van het woord genereren. Het gestuurde bericht wordt vanuit de client naar de server gestuurd onder de chat message event. De server stuurt de berichten naar alle clients. 

 <details>
 <summary> <h3>De code  voor de chat message event</h3></summary>
 
 ```javascript

 //client
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


 //server

io.on('connection', (socket) => {

    socket.on('chat message', (chat) => {
        io.emit('chat message', chat);
        console.log(`${chat.username}: ${chat.message}`);
    })
})

 //client

 socket.on('chat message', (chat) => {

    const speechBubble = document.createElement('li');
    speechBubble.innerHTML = `<span>${chat.username}</span>${chat.message}`;
    console.log(`${chat.username}: ${chat.message}`);

    chatContainer.appendChild(speechBubble);
    // De scroll wordt naar beneden gezet zodat de laatste berichten zichtbaar zijn
    chat.scrollTop = chat.scrollHeight;

    console.log('chat message received')
    //Als de username van de chat message gelijk is aan de username van de input dan wordt de class 'own-message' toegevoegd
    //Deze class zorgt ervoor dat de speech bubble aan de rechterkant van het scherm wordt geplaatst
    if (chat.username === usernameInput.value) {
        speechBubble.classList.add('own-message');
    }

})

 ```

 </details>


 ### Gebruiker aan het typen - typing event
Wanneer een gebruiker aan het typen is wordt `typing` event getriggered naar de event wordt gestuurd naar de server gestuurd. De server luister naar de typing event en verstuurt de bericht dat de `currentUser` is aan het typen naar iedereen behalve degenen die het bericht 
had verstuurt.  

```javascript
//client
   wordInput.addEventListener('input', (e) => {
    let input = wordInput.value;
    e.preventDefault();
    const typingUser = currentUser;
    socket.emit('typing', typingUser);
})

//server

    socket.on('typing', (typingUser) => {
        // io.emit('typing', typingUser);
        socket.broadcast.emit('typing', typingUser);
        console.log(`${typingUser} is typing`);
    })


//client
```


### Gebruiker niet meer aan het typen - stop typing event




### Gebruikers in de chat bijgekomen
<details>
<summary><h3>Het code voor de typing event </h3></summary>

</details>

### Gebruikers uit de chat weggegaan
<details>
<summary><h3>Het code voor de typing event </h3></summary>

</details>

 ### Gegenereerde woorden uit de API
 De woorden die de gebruiker typt wordt tegelijkertijd gestuurd naar de API, De API stuur de data terug naar de client en de client stuurt data naar de server met de `wordData` event. De server stuurt de data naar de clients en in de client wordt de data weergegeven. Wat wordt weergegven is de woord spelling, audio, en de betekenis. 
 
---

# Bronnen


## ⚖ License
[MIT](https://github.com/K3A101/real-time-web-2223/blob/main/LICENSE) 
