let searchInput =document.querySelector('#search-input');
let searchBtn=document.querySelector('#search-button');

searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    searchInput.value='';
    getCountriesInfo();
})

async function getCountriesInfo(){
    let response=await fetch ('https://restcountries.eu/rest/v2/all');
    let countries=await response.json();
    console.log(countries);
}