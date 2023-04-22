console.log('script.js loaded');
const socket = io();

const wordInput = document.querySelector('#word-input');
const submitButton = document.querySelector('#submit-button');
console.log(wordInput);


wordInput.addEventListener('input', (e) => {
    e.preventDefault();
    console.log(wordInput.value);
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const word = wordInput.value;

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            fetchData(data)
        }).catch(err => {
            console.log(err)
        })
})   


function fetchData(data) {
    const definition = data[0].meanings[0].definitions[0].definition;

    const pElement = document.createElement('p');
    pElement.textContent = definition;
    document.body.appendChild(pElement);
}