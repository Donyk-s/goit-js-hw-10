import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = {
  searching: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
console.log(refs.countryInfo);
console.log(refs.countryList);
console.log(refs.searching);
refs.searching.addEventListener(
  'input',
  debounce(e => {
    const valueTrimmed = input.value.trim();
    cleanHtml();
    if (valueTrimmed !== '') {
      fetchCountries(valueTrimmed).then(response => {
        if (response.lenght > 10) {
          Notiflix.Notify.info('Search is bad');
        } else if (response === undefined) {
          // або тут записати 0
          Notiflix.Notify.info('undefined');
        } else if (response.lenght >= 2 && response <= 10) {
          renderCountryList(response);
        } else if (response.lenght === 1) {
          renderOneCountry(response);
        }
      });
    }
  }, DEBOUNCE_DELAY)
);
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
