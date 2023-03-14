// export const fetchCountries = name => {
//   return fetch(
//     `https://restcountries.com/v3.1/name/{name}?fields=,name,capital,population,flags,languages`
//   )
//     .then(response => {
//       if (!response.ok) {
//         if (response.status === 404) {
//           return [];
//         }
//         throw new Error(response.status);
//       }
//       return response.json();
//     })

//     .catch(err => {
//       console.error(err);
//     });
// };
export const fetchCountries = name => {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`
  )
    .then(response => {
      // якщо немає відповіді 200 ОК і є 404 - повернути пустий масив
      if (!response.ok) {
        if (response.status === 404) {
          return []; // поверненя пустого масиву
        }
        // явно відхиляємо проміс, щоб можна було зловити і обробити помилку
        throw new Error(response.status);
      }

      // повертаємо відповідь-список країн у форматі .json
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
};
// const async = function fetchCountries{
//   try {
//     return
//   } catch (error) {

//   }
// }
