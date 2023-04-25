console.log('script.js loaded');
const socket = io();

const wordInput = document.querySelector('#word-input');
const submitButton = document.querySelector('#submit-button');

// const input = document.getElementById('input');
// const inputButton = document.getElementById('input-button');


// submitButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const word = input.value;
//     if (word) {
//         socket.emit('get word', word);
//         console.log(word);
//         word = '';
//     }

// })

// socket.on('get word', (word) => {
//     let wordContainer = document.createElement('li');

// });





wordInput.addEventListener('input', (e) => {
    e.preventDefault();
    console.log(wordInput.value);
})




submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const word = wordInput.value;
    // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         socket.emit('wordData', data);
    //         // fetchData(data)
    //         // Do something with the data if necessary
    //     }).catch(err => {
    //         console.log(err);
    //     });


    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
    // fetch('/new-word' + word)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            socket.emit('wordData', data);
        }).catch(err => {
            console.log(err)
        })
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

// socket.on('wordData', (data) => {
//     console.log(data);
//     // Do something with the data received from the server
//     const definition = data[0].meanings[0].definitions[0].definition;

//     const pElement = document.createElement('p');
//     pElement.textContent = definition;
//     document.body.appendChild(pElement);
// });