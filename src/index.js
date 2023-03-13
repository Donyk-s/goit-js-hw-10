import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const refs = {
  searching: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
console.log(refs.countryInfo);
console.log(refs.countryList);
console.log(refs.searching);
refs.searching.addEventListener('keydown', e => {});
fetch(`https://restcountries.com/v2/name/{name}?fullText=true`)
  .then(response => {
    return response.json();
  })
  .then(country => {
    console.log(country);
  })
  .catch(err => {
    console.log(err);
  });
