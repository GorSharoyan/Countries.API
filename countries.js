let searchInput =document.querySelector('#search-input');
let searchBtn=document.querySelector('#search-button');
let tbody=document.querySelector('tbody');

searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    
    // if(searchInput.value){
    //     getError(searchInput.value)
    //     searchInput.value='';
    // }else{
        getCountriesInfo(searchInput.value);
        searchInput.value='';
    // }
})

async function getCountriesInfo(name){
    let response=await fetch (`https://restcountries.eu/rest/v2/name/${name}`);
    let country=await response.json();
    console.log(country);
    createTableRow(country)
}
function createTableRow(country){
    let tr=document.createElement('tr');
    let favBtn=document.createElement('button');
    let removeBtn=document.createElement('button');
    removeBtn.innerText='remove';
    favBtn.innerText='add';

    let countryName=country.borders;
    tr.append(countryName);
    tr.append(favBtn);
    tr.append(removeBtn);
    tbody.append(tr);
    
}
// function getError(value){
//     if(Number(value.trim())==='NaN'){
//         let errorMessage=document.createElement('div');
//         div.classList='error-message';
//         let errorText=document.createElement('p');
//         errorText.innerText='Invail input value .Input value must be a string!!!';
//         errorMessage.append(errorText);
//         tbody.append(errorMessage);
//     }
// }