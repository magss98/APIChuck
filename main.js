const url = 'https://api.chucknorris.io/jokes/random';
let jokes = document.getElementById("joke");

let button = document.getElementById("buttonclick");

button.addEventListener("click", function () {
  fetch(url)
    .then((response) => {
      // Verifica si la solicitud fue exitosa (código de respuesta 200)
      if (!response.ok) {
        throw new Error('Error en la solicitud a la API');
      }
      // Parsea la respuesta JSON
      return response.json();
    })
    .then((data) => {
      // Manipula los datos obtenidos de la API y muestra el chiste en un alert
      jokes.textContent = 'Joke Chuck: ' + data.value;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});






