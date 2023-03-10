import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const refs = { searching: document.querySelector('#search-box') };
console.log(refs.searching);
refs.searching.addEventListener('keydown', e => {});
fetch(
  `https://restcountries.com/v2/name/{name}?fullText=true,capital/{capital},population,flags.svg,languages`
)
  .then(response => {
    return response.json();
  })
  .then(country => {
    console.log(country);
  })
  .catch(err => {
    console.log(err);
  });
