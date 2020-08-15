let searchInput =document.querySelector('#search-input');
let searchBtn=document.querySelector('#search-button');
let table=document.querySelector('table');

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


getCountriesInfo();
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

async function getCountriesInfo(){
    let response=await fetch (`https://restcountries.eu/rest/v2/all`);
    let countries=await response.json();
    console.log(countries);
    createTableRow(countries)
}
function createTableRow(countries){

    const tableBody = tbody({}, countries.map(country =>
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
            button({},['add']),
            button({},['remove']),
        ])
     ])))
    
        table.append(tableBody)
    }
    // ])));
    // countries.forEach( country => {
    // let tr=document.createElement('tr');
    // let td=document.createElement('td');

    // let favBtn=document.createElement('button');
    // let removeBtn=document.createElement('button');
    // removeBtn.innerText='remove';
    // favBtn.innerText='add';

    // let countryName=country.name;
    // // tr.append(countryName);
    // // tr.append(favBtn);
    // // tr.append(removeBtn);
    // // tbody.append(tr);
//     // })
// }
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
