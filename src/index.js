const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let userInput = event.target.searchByID.value;

    fetch(`http://localhost:3000/movies/${userInput}`)
      .then((resp) => resp.json())
      .then((data) => {
        const movieTitle = document.querySelector("#movieDetails h4");
        const movieSummary = document.querySelector("#movieDetails p");

        movieTitle.innerText = data.title;
        movieSummary.innerText = data.summary;
        console.log(movieSummary);
      });
  });
};
document.addEventListener("DOMContentLoaded", init);
