import { sortMovies } from './helpers.js';

export function getMovies() {
  return fetch('https://run.mocky.io/v3/7c6fd932-2b51-4a22-8c8f-79bab57b81f1')
    .then((res) => res.json())
    .then(sortMovies);
}