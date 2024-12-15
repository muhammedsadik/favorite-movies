const favoriteMovie = "For Exist Press 'İptal'\n\nWhat is Your Favorite Movie ?";
const str = "";
const exited = "Exited"

const movieList = [];

while (true) {
  let movie = prompt(favoriteMovie);

  if (movie === null) {
    alert(exited);
    break;
  }
 
  if (movie.trim() === str) {
    continue;
  }

  if (!movieList.includes(movie.trim())) {
    movieList.push(movie.trim());    
  } 

}

if (movieList.length > 0) {
  console.log(movieList.sort());
}