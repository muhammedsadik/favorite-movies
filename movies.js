const favoriteMovie = "For Exist Press 'İptal'\n\nWhat is Your Favorite Movie ?";
const str = "";
const exited = "Exited"

const movieList = [];
let count = 0;

while (true) {
  let movie = prompt(favoriteMovie);

  if (movie === null) {
    alert(exited);
    break;
  }
 
  if (movie === str) {
    continue;
  }

  if (movie.trim()) {
    movieList[count] = movie.trim();    
    count++;
  } 

}

if (count > 0) {
  console.log(movieList.sort());
}