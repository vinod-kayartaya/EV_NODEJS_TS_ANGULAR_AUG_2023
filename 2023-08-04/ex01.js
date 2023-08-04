import axios from 'axios';

const title = 'spider';
const url = `https://www.omdbapi.com/?apikey=aa9e49f&s=${title}`;

console.log('doing...');
axios
  .get(url)
  .then((resp) => resp.data)
  .then((data) => data.Search)
  .then((movies) => {
    if (!movies) {
      console.error('no moves found for title "' + title + '"');
      return;
    }
    movies.forEach((m) => console.log(`${m.Title} - ${m.Year}`));
  })
  .catch((err) => console.error(err));

console.log('done!');
