const e={searching:document.querySelector("#search-box")};console.log(e.searching),e.searching.addEventListener("keydown",(e=>{})),fetch("https://restcountries.com/v2/name/{name}?fullText=true,capital/{capital},population,flags.svg,languages").then((e=>e.json())).then((e=>{console.log(e)})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.61ae04a8.js.map
