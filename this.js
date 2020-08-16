/* 
    this: this refers to the calling context.
*/

// "use strict" //This will indicate the potential logical error in line no: 22

console.log(this); // window

function foo() {
    console.log(this); // window again.
}
foo();

var name = 'Danny';

let dragon = {
    name: 'Viserion',
    whatisyourthis: function whatThis() {
        console.log(this);
        function changeName(){
            console.log('In change name: ', this);
            this.name = 'Rhaegal';
        }
        changeName();
    }
}

dragon.whatisyourthis(); // ?

// The behavior is different in node to that in browser.
console.log('My name is ', name); // Gotcha!






// Example 2
const character = {
    nam: 'Simon',
    getCharacter() {
        return this.nam;
    }
};
const giveMeTheCharacterNOW = character.getCharacter;

//How would you fix this?
//this should return 'Simon' but doesn't
console.log('?', giveMeTheCharacterNOW()); // calling context is window
/* 
giveMeTheCharacterNOW() is same as window.giveMeTheCharacterNOW()
*/ 


/* 
    this refers to calling context.
    calling context is character.
*/
console.log(character.getCharacter());
