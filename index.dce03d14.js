!function(){var n={searching:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};console.log(n.countryInfo),console.log(n.countryList),console.log(n.searching),n.searching.addEventListener("keydown",(function(n){})),fetch("https://restcountries.com/v2/name/{name}?fullText=true").then((function(n){return n.json()})).then((function(n){console.log(n)})).catch((function(n){console.log(n)}))}();
//# sourceMappingURL=index.dce03d14.js.map
