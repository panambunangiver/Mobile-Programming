//Desktrukturisasi

//Array {caranya, Ambil sebagian item, deklarasi & Assignment terpisah, Default value, Rest Operator}

const arrPerson = ['Giver', 'Ayen', 100, true, "Jl Arnold Mononutu"];

// const firstName = arrPerson[0];
// const lastName = arrPerson[1];
// const age = arrPerson[2];
// const isMarried = arrPerson[3];

// const [firstName, lastName, age, isMarried] = arrPerson;
// let [, , age, isMarried, address = "Unklab"] = arrPerson
// console.log(firstName, lastName, age, isMarried);
// console.log(age, isMarried, address);

// let [firstName, lastName, ...rest] = arrPerson;

// console.log(firstName, lastName);
// console.log(rest);

//Object {caranya, Ambil sebagian item, deklarasi & Assignment terpisah, Default value, Rest Operator, Penerapan}

// const ObjPerson = {
//     firstName:  "Giver",
//     lastName:   "Panambunan",
//     age:    21,
//     isMarried: true,
//     address: "Airmadidi "
// };

// const firstName = ObjPerson.firstName;
// const lastName = ObjPerson.lastName;
// const age = ObjPerson.age;
// const isMarried = ObjPerson.isMarried;

// const { age: umur} = ObjPerson;

// console.log(umur);

// ({ firstName, lastName, address = "sarongsong 1"} = ObjPerson);
// console.log(firstName, lastName, address);

// let { firstName, lastName, ...rest } = ObjPerson;

// console.log(firstName, lastName, rest); 

// const display = (props) => 
//     `Hallo nama saya ${props.firstName} ${props.lastName}`;

// console.log(display(ObjPerson));

// let bil1,bil2,bil3,bil4;
// [bil1=10,bil2=12,bil3=9,bil4=4]=[3];
// console.log(bil1);
// console.log(bil2);
// console.log(bil3);
// console.log(bil4);