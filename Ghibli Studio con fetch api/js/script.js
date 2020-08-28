// Using Fetch API.

// Document manipulation using JS.

var app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

// Replace ./data.json with your JSON feed. No need to parse with Fetch.
fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data)
      data.forEach((movie) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')
      const h1 = document.createElement('h1');
      h1.textContent = movie.title;
      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;
      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
      }
    );
  })
  .catch((err) => {
    // Do something for an error here
    alert("Oh gosh! Something went awfully wrong here man!")
  })
