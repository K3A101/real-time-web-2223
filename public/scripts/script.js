console.log('script.js loaded');
const socket = io();

const wordInput = document.querySelector('#word-input');
const submitButton = document.querySelector('#submit-button');
const chatContainer = document.querySelector('ul');
const chatPage = document.querySelector('#words-container');
const createUserBtn = document.querySelector('#create-user-btn');
const usernameForm = document.querySelector('.username-form');
const userList = document.querySelector('#user-online');
let currentUser;
socket.emit('get online users')


createUserBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const usernameInput = document.querySelector('#username-input');
    const username = usernameInput.value.trim();
    if (username.length > 0) {
        socket.emit('new-user', username);
        currentUser = username;
        usernameForm.classList.add('hidden');
    }

    console.log('New user created')

});




wordInput.addEventListener('input', (e) => {
    e.preventDefault();
    console.log(wordInput.value);
})


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let word = wordInput.value;

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        // fetch('/new-word' + word)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            socket.emit('wordData', data);
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
        word = '';
    }
})

socket.on('wordData', (data) => {
    console.log(data);
    displayData(data)


})

function displayData(data) {


    
    const randomIndex = Math.floor(Math.random() * data[0].meanings[0]?.definitions.length);
    const definition = data[0].meanings[0]?.definitions[randomIndex].definition || 'No definition available';
    const word = data[0].word;
    // const audioUrl = data[0].phonetics[0]?.audio || data[0].phonetics[1]?.audio||'No audio available';
    // const phonetics = data[0].phonetics[0]?.text || data[0].phonetic || 'No phonetics available';
    let audioUrl = 'No audio available';
    for (let i = 0; i < data[0].phonetics.length; i++) {
        if (data[0].phonetics[i].audio) {
            audioUrl = data[0].phonetics[i].audio;
            break;
        }
    }
    // If there is no audio available, the audioUrl will be set to 'No audio available' else it will pick an value from the array
    let phonetics = 'No phonetics available'
    for (let t = 0; t < data[0].phonetics.length; t++) {
        if (data[0].phonetics[t].text) {
            phonetics = data[0].phonetics[t].text || data[0].phonetic ;
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

        <p>${definition}</p>
        </li>`

    chatPage.insertAdjacentHTML('beforeend', html);


 
}



socket.on('chat message', (chat) => {

    const speechBubble = document.createElement('li');
    speechBubble.innerHTML = `<span>${chat.username}</span>:${chat.message}`;
    console.log(`${chat.username}: ${chat.message}`);

    chatContainer.appendChild(speechBubble);
    // De scroll wordt naar beneden gezet zodat de laatste berichten zichtbaar zijn
    chat.scrollTop = chat.scrollHeight;
    console.log()

    // In your own perspectief staat de chat message in de rechterkant van de chat

})

socket.on('new-user', (username) => {
    console.log(username + ' has joined the chat');
    const user = document.createElement('li');
    user.innerHTML = `${username}`;
    userList.appendChild(user);
});

socket.on('get online users', (onlineUsers) => {
    for (username in onlineUsers) {
        const user = document.createElement('li');
        user.innerHTML = `${username}`;
        userList.appendChild(user);
    }
});

socket.on('user has left', (onlineUsers) => {
    userList.innerHTML = '';
    for (username in onlineUsers) {
        const user = document.createElement('li');
        user.innerHTML = `${username}`;
        userList.appendChild(user);
    }
});