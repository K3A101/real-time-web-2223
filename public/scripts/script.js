console.log('script.js loaded');
const socket = io();

const wordInput = document.querySelector('#word-input');
const submitButton = document.querySelector('#submit-button');
const ul = document.querySelector('ul');



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

    if (word) {
        //Ik maak een array van object aan met de waarde van de username en de message
        const chat = {
            message: word
        }
        //De chat message event wordt gestuurd met de chat array als parameter
        //De chat array bevat de username en de message
        socket.emit('get words', chat); //verstuurd een chat message  event naar de server met de chat object array als data
        word = '';
    }
})

socket.on('wordData', (data) => {
    console.log(data);
    displayData(data)


})

function displayData(data) {
    const definition = data[0].meanings[0].definitions[0].definition;

    const pElement = document.createElement('p');
    pElement.textContent = definition;
    document.body.appendChild(pElement);
}

socket.on('get words', (wordInput) => {

    const speechBubble = document.createElement('li');
    speechBubble.innerHTML = `${wordInput.message}`;
    speechBubble.setAttribute('class', 'talk-bubble tri-right border round btm-left-in');

    ul.appendChild(speechBubble);
    // De scroll wordt naar beneden gezet zodat de laatste berichten zichtbaar zijn
    wordInput.scrollTop = wordInput.scrollHeight;

    // In your own perspectief staat de chat message in de rechterkant van de chat
    

})


