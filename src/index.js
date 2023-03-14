import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const refs = {
  searching: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
// console.log(refs.countryInfo);
// console.log(refs.countryList);
// console.log(refs.searching);
refs.searching.addEventListener(
  'input',
  debounce(Event => {
    const trimValue = refs.searching.value.trim();
    cleanHtml();

    if (trimValue !== '') {
      fetchCountries(trimValue).then(response => {
        if (response.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (response.length === 0) {
          Notiflix.Notify.failure('Oops, there is no country with that name');
        } else if (response.length >= 2 && response.length <= 10) {
          renderCountryList(response);
        } else if (response.length === 1) {
          renderOneCountry(response);
        }
      });
    }
  }, DEBOUNCE_DELAY)
);
function cleanHtml() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

function renderCountryList(countries) {
  const markup = countries
    .map(el => {
      return `<li>
      <img src="${el.flags.svg}" alt="Flag of ${el.name.official}" width="30" hight="20">
         <p>${el.name.official}</p>
                </li>`;
    })
    .join('');

  refs.countryList.innerHTML = markup;
}

function renderOneCountry(countries) {
  const markup = countries
    .map(el => {
      return `<li>
      <img src="${el.flags.svg}" alt="Flag of ${
        el.name.official
      }" width="30" hight="20">
         <p>${el.name.official}</p>
            <p><b>Capital</b>: ${el.capital}</p>
            <p><b>Population</b>: ${el.population}</p>
            <p><b>Languages</b>: ${Object.values(el.languages)} </p>
                </li>`;
    })
    .join('');

  refs.countryList.innerHTML = markup;
}
