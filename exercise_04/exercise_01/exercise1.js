//
const people =["greg","mary","davon","james"];
// no.1
for(let i=0; i<people.length; i++){
console.log(people[i]);
}
// no.2
people.forEach(function (data){
console.log(data);
});
// no.3
people.pop();
console.log()
// no.4
people.shift()
console.log(people)
// no.5
people.unshift("Matt")
console.log(people)
// no.6
people.push("Giver")
console.log(people)
// no.7
for(let i = 0; i < people.length; i++){
console.log(people[i])
if(people[i] === "Mary"){
break;
}
}
// no.8
const people2 = people.slice(-2)
console.log(people2);