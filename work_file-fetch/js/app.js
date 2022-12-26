const select = document.querySelector('#breeds');
const card = document.querySelector('.card');
let current = "";

fetch("https://dog.ceo/api/breeds/list") 
.then((res) => res.json())
.then((data) => {
    generateBreeds(data.message[0])
    fetchImage(data.message)
});

function generateBreeds(data) {
    data.map((dogBreed) => {
    const html = `<option value="${dogBreed}">${dogBreed}</option>`;
    select.innerHTML += html;
    });
}

function generateImage(url) {
    const image = `<img src="${url}">`
    card.innerHTML = image;
}
