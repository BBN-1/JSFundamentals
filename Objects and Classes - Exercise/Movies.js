function moviesMe(array) {
  let movies = [];

  for (let line of array) {
    if (line.includes("addMovie")) {
      let name = line.split("addMovie ")[1];
      movies.push({ name });
    } else if (line.includes("directedBy")) {
      let [name, director] = line.split(" directedBy ");
      let movie = movies.find((x) => x.name === name);
      if (movie) {
        movie.director = director;
      }
    } else if (line.includes("onDate")) {
      let [name, date] = line.split(" onDate ");
      let movie = movies.find((x) => x.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }

  for (let line of movies) {
    if (line.name && line.date && line.director) {
      console.log(JSON.stringify(line));
    }
  }
}
