/* 
    What prototype chain?
    - If you ask an object for a property if check if it has, if not it checks its prototype object and its prototype object
    and on and and on, if its can't find in any till the base obj, it return undefined.


    NOTE: Run in browser.
*/

var naveen = {
    name: 'naveen',
    kind: 'human'
}

var charmandar = {
    name: 'charmandar'
}

console.log('naveen.kind ', naveen.kind);
console.log('charmandar.kind ', charmandar.kind);

// This is like an inheritance where the base class is naveen and specialized class is drogon.
var drogon = Object.create(naveen, {name: {value: 'Dragon'}}); 
console.log('drogon.kind ', drogon.kind);
console.log('drogon ', drogon );
console.log(drogon.name);