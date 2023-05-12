console.log('script.js loaded');
const socket = io();
// ------------------- VARIABELEN -------------------

// Varaiabel voor de Chat onderdelen
const sendMessage = document.querySelector('#submit-button');
const chatContainer = document.querySelector('#chat-messages');
const wordsDictionarySection = document.querySelector('#words-container');
const typingIndicator = document.querySelector('.feedback');
const chat = document.querySelector('.chat');
const wordInput = document.querySelector('#word-input');
const backBtn = document.querySelector('#back-btn');
const networkError = document.querySelector('.error-message');

// Variabel voor het maken van een gebruikersnaam
const createUserBtn = document.querySelector('#create-user-btn');
const usernameForm = document.querySelector('.username-form');
const userList = document.querySelector('#user-online');
const usernameInput = document.querySelector('#username-input');
const userListButton = document.querySelector('.user-btn');
const displayedUsername = document.querySelector('.displayed-username');

const loader = document.querySelector('.loader');
let currentUser;
socket.emit('get online users')

chat.classList.add('hidden');
backBtn.classList.add('hide-back-btn');


// ------------------- EVENTLISTENERS -------------------

// Wanneer de userlist button is geklikt wordt de class 
//'show-userlist' toegevoegd aan de userlist container
userListButton.addEventListener('click', (e, button) => {
    e.preventDefault();
    const userlistContainer = document.querySelector('.user-container');
    userlistContainer.classList.toggle('show-userlist');
    // button.classList.toggle('show-userlist')
});

// wanneer een gebruikersnaam aangemaakt, word de twee events  naar de server gestuurd
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
      
      loader.classList.add('loader-screen');
    //   Na 2 seconden wordt de loader verwijderd
        setTimeout(() => {
            loader.classList.remove('loader-screen');
        }, 2000);
        
        displayedUsername.innerHTML = `${username}'s ` + '';
    }

    console.log('New user created')

});


//Als je op de back button klikt, ga je terug naar de home pagina met de username formulier
backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    usernameForm.classList.remove('hidden');
    backBtn.classList.add('hide-back-btn');
    chat.classList.add('hidden');
})


wordInput.addEventListener('input', (e) => {
    let input = wordInput.value;
    e.preventDefault();
    const typingUser = currentUser;
    socket.emit('typing', typingUser);
})

// Wanneer de gebruiker op het verstuur knop klik, wordt waarde van de input gestuurd naar de API en komt de data terug
// Verder word de  chat message event gestuurd naar de server
// De stop typing event wordt gestuurd naar de server

sendMessage.addEventListener('click', (e) => {

    const typingUser = currentUser;
    e.preventDefault();
    let word = wordInput.value;
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        // fetch('/new-word' + word)
        .then(response => response.json())
        .then(data => {
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

// ------------------- DATA UIT API ZICHTBAAR NAAR DE HTML -------------------

// Wanneer de gebruiker  wordt de data uit de api opgehaald en wordt de data in de html geplaatst
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
       <button class="copy-word-btn">Copy the definition</button>
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
//Alle woord definities naar de server gestuurd om opelsagen te worden 
socket.on('word description history', wordDescriptionHistory => {
    wordDescriptionHistory.forEach(data => {
        displayData(data);
    })
})

// ------------------- HET DEFINITIE KOPIEREM -------------------
function copyText() {

    const textToCopy = document.querySelectorAll('.word-definition');
    const copyConfirmations = document.querySelectorAll('.copied-confirmation');
    let copiedText

    const copyBtns = document.querySelectorAll('.word button.copy-word-btn');
    

    for (let i = 0; i < copyBtns.length; i++) {
        copyBtns[i].addEventListener('click', () => {
            navigator.clipboard.writeText(textToCopy[i].innerText);
            copyConfirmations[i].innerText = 'You copied the text!';
            copiedText = textToCopy[i].innerText;
            console.log('Copied text: ', copiedText);
        })

    }

}


// ----------------- SOCKET REALTIME EVENTS ----------------- //
// wanneer de server de wordData event stuurt, wordt de data in de displayData functie geplaatst
//Hier word de berichten in de chat zichtbaar gemaakt
socket.on('chat message', (chat) => {
    addChatMessage(chat);

})
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


// Wanneer een nieuwe gebruiker wordt aangemaakt, wordt de username in de userList geplaatst
socket.on('new-user', (username) => {
    let user = document.createElement('li');
    user.innerHTML = `${username}`;
    userList.appendChild(user);
});

// Er komt een bericht binnen dat een gebruiker  in de chat is gekomen
socket.on('user joined', (username) => {
    console.log(username + ' has joined the chat');
    let user = document.createElement('li');
user.classList.add('user-joined-message');
    user.innerHTML = `${username} has joined the chat`;
    chatContainer.appendChild(user);
});

// Met deze event kunnen gebruikers zien wie er online is
socket.on('get online users', (onlineUsers) => {
    userList.innerHTML = '';
    for (username in onlineUsers) {
        let user = document.createElement('li');
        user.innerHTML = `${username} is online`;
        userList.appendChild(user);
    }
});

// Wanneer een gebruiker aan het typen is, kunnen andere gebruikers zien wie aan het typen is
socket.on('typing', (typingUser) => {

    // const typingIndicator = document.createElement('div');
    typingIndicator.innerHTML = `<span>${typingUser}</span> is typing...`;
    console.log(`${typingUser} is typing...`);

})

// Wanneer de typende gebruiker  het bericht verstuurt  wordt de typing indicatie verborgen
socket.on('stop typing', (typingUser) => {
    typingIndicator.innerHTML = '';
    console.log(`${typingUser} has stopped typing...`);
})
// Wanneer een gebruiker de chat verlaat, wordt de username uit de userList verwijderd
socket.on('user has left', (onlineUsers) => {
    userList.innerHTML = '';
    for (username in onlineUsers) {
        let user = document.createElement('li');
        user.innerHTML = `${username} has left the chat`;
        chatContainer.appendChild(user);

    }
});

// kijk voor de connectie met de server elke keer of de connectie er nog is
socket.on('connect', () => {
    checkSocketConnection();
    setInterval(checkSocketConnection, 500);

})

function checkSocketConnection() {

    if (socket.connected) {
        console.log('Socket is connected');
        networkError.classList.remove('socket-disconnected');

    } else {
        console.log('Socket is disconnected');
        networkError.innerHTML = ` 
        <h2 class="hit-the-floor">504</h2>
        <p> <b>Your are offline</b> <br> You are offline, please check your internet connection</p>`;
        networkError.classList.add('socket-disconnected');

      

    }

}