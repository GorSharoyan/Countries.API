let searchInput =document.querySelector('#search-input');
let searchBtn=document.querySelector('#search-button');
let table=document.querySelector('table');
let favourites =JSON.parse(localStorage.getItem("favourites"));


function element(tagName) {
    return function(attrs, children = []) {
        const elem = document.createElement(tagName);

        for (const key in attrs) {
            elem[key] = attrs[key];
        }

        children.forEach(child => {
            if (typeof child === 'string') {
                elem.appendChild(document.createTextNode(child))
            } else {
                elem.appendChild(child)
            }
        });

        return elem;
    }
}

const [span, div, tr, td, button, tbody,img] = [
    'span', 'div', 'tr', 'td', 'button', 'tbody','img'
].map(t => element(t))

function createTableRow(countries){

    let tableBody = tbody({}, countries.map(country =>
     tr({}, [
        td({}, [country.name]),
        td({}, [country.capital]),
        td({}, [
            img({
                src:country.flag,
                classList:['flag'],
            }),    
        ]),
        td({}, [
            button({onclick:() => addToFavourites(country)},['add']),
            button({onclick: () =>removeFromFavourites(country)},['remove']),
        ])
     ])))
    
        table.append(tableBody)
    }
    createTableRow(favourites);


    function addToFavourites(country) {
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
       
   function removeFromFavourites (country) {
        let favourites = JSON.parse(localStorage.getItem('favourites'));
        if(favourites.some(c => c.name === country.name)){
            const newFavs = favourites.filter(c => c.name !== country.name);
           localStorage.setItem('favourites',JSON.stringify(newFavs));
        }
    }
