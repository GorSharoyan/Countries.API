import { createTableRow } from './dom.helpers/createTableRow.js';

let searchInput =document.querySelector('#search-input');
let searchBtn=document.querySelector('#search-button');
let table=document.querySelector('table');
let favourites =JSON.parse(localStorage.getItem("favourites"));



createTableRow(table,favourites);