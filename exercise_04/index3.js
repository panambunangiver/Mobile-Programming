// console.log("module JavaScript");
//TUTORIAL PERTAMA
// import {fullName, person, display} from './person.js';

// console.log(fullName, person);
// display(person); //objectnya person.

//TUTORIAL KEDUA Export AS dan Import AS
import { 
    fullName  as namaLengkap, 
    person as orang, 
    display as tampil, 
}   from './person.js';

// import Input from './TextInput/index.js';

import Input, {color} from './TextInput/index.js';

console.log(namaLengkap, orang);
tampil(orang); //objectnya orang.

Input();
console.log(color);