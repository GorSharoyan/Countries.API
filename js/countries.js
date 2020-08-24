import  {createTableRow, span, div, tr, td, button, tbody,img} from './dom.helpers/createTableRow.js';
import { BASE_URL } from "./dom.helpers/constants/BASE_URL.js";

let searchInput =document.querySelector('#search-input');
let searchBtn=document.querySelector('#search-button');
let table=document.querySelector('table');



async function getCountriesInfo(){
    let response=await fetch (BASE_URL);
    let countries=await response.json();
    console.log(countries);
    createTableRow(table,countries)
};

getCountriesInfo();

    
export function addToFavourites(country) {
   if(localStorage.getItem('favourites') === null){
        localStorage.setItem('favourites',JSON.stringify([country]));
     }else{
       let favourites = JSON.parse(localStorage.getItem('favourites'));
        if(favourites.every(c => c.name !== country.name)){
                favourites.push(country);
                localStorage.setItem('favourites',JSON.stringify(favourites));
        }
    }
}
       
export function removeFromFavourites (country) {

 let favourites = JSON.parse(localStorage.getItem('favourites'));

   if(favourites.some(c => c.name === country.name)){
      const newFavs = favourites.filter(c => c.name !== country.name);
       localStorage.setItem('favourites',JSON.stringify(newFavs));
  }
}

