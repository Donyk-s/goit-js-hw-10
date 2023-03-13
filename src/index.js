import './css/styles.css';
import Notiflix from 'notiflix';

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
  debounce(e => {
    const valueTrimmed = input.value.trim();
    cleanHtml();
    if (valueTrimmed !== '') {
      fetchCountries(valueTrimmed).then(response => {
        if (response.lenght > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter more specific name.'
          );
        } else if (response === undefined) {
          // або тут записати 0
          Notiflix.Notify.info('Ooops, there is no country with that name');
        } else if (response.lenght >= 2 && response <= 10) {
          renderCountryList(response);
        } else if (response.lenght === 1) {
          renderOneCountry(response);
        }
      });
    }
  }, DEBOUNCE_DELAY)
);
// fetch(
//   `https://restcountries.com/v3.1/name/{name}?fields=,name,capital,population,flags,languages`
// )
//   .then(response => {
//     if (!response.ok) {
//       if (response.status === 404) {
//         return [];
//       }
//       throw new Error(response.status);
//     }
//     return response.json();
//   })

//   .catch(err => {
//     console.error(err);
//   });

function renderCountryList(countrys) {
  const markup = countrys
    .map(country => {
      return `<li><img src= "${country.flag.svg}" alt="Flag of ${country.name.official}" width ="30" height = "20"><p>${el.name.official}</p></li>`;
    })
    .join('');
  refs.countryList.innerHTML = markup;
}
function renderOneCountry(countrys) {
  const markup = countrys
    .map(country => {
      return `<li><img src = "${country.flag.svg}" alt="Flag of ${
        country.name.official
      }" width ="30" height = "20"><p>${el.name.official}</p>
    <p><b>Capital</b>: ${country.capital}</p>
    <p><b>Population</b>: ${country.population}</p>
    <p><b>Languages</b>: ${Object.values(country.languages)}</p>
    </li>`;
    })
    .join('');
  refs.countryList.innerHTML = markup;
}
