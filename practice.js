const movies = [
  { id: 1, title: "Die Hard", director: "Bruce Willis", rating: 3.4 },
  { id: 2, title: "Mission Impossible 1", director: "Tom Cruise", rating: 4.5 },
  { id: 3, title: "Little Miss forest", director: "John Doe", rating: 4.1 },
  { id: 4, title: "Mission Impossible 2", director: "Tom Cruise", rating: 4.4 },
];

//get movies rated 4.0 and above

// get me movies directed by tom cruise

// get the movie that has an id of 3

// get movies that are rated less than 4

//write a function searchMovie that takes a searchTerm as a parameter
//return the movie if it is in the array and returns no movie found if the
// searchTerm is not in the array

let ratedHigher = movies.filter((movie) => {
  return movie.rating >= 4.0;
});
console.log(ratedHigher);

let tomCruiseMovies = movies.filter((movie) => movie.director === "Tom Cruise");
console.log(tomCruiseMovies);

let idOf3 = movies.find((movie) => movie.id === 3);
console.log(idOf3);

let ratedLower = movies.filter((movie) => {
  return movie.rating < 4.0;
});
console.log(ratedLower);

function searchMovie(searchTerm) {
  let convertedSearchTerm = searchTerm.toLowerCase();
  let search = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(convertedSearchTerm);
  });
  if (search.length > 0) {
    return search;
  } else {
    return "No Movie found";
  }
}
console.log(searchMovie("Miss"));
