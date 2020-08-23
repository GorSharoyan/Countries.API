import { element } from './element.js';
import {addToFavourites,removeFromFavourites} from '../countries.js';


export const [span, div, tr, td, button, tbody,img] = [
    'span', 'div', 'tr', 'td', 'button', 'tbody','img'
].map(t => element(t))

export function createTableRow(parent,countries){

    let tableBody = tbody({}, countries.map(country =>
     tr({classList:["table-row"]}, [
        td({classList:['coutry-cell']}, [country.name]),
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
    
        parent.append(tableBody)
    }