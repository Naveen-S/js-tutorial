let arr = [10, 20, 30];

// Classical
/* 
    You can make use of break and continue & return if this looping construct is within a function.
*/
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// forEach way
// break and continue has no effect inside the forEach construct.
arr.forEach((item) => {
    console.log('In forEach: ', item);
})

let obj = {a: 'apple', b: 'brittania', c: 'calvin & klien'}
// for-in
/* Note: This has to be specifically be used on an object not array.
    Why?

*/
for(let prop in obj) {
    console.log(`Prop: ${prop} value: ${obj[prop]}`);
}

for(let index in arr) {
    console.log(index);
    console.log(typeof index); // typeof is string, you expect it to be a number but its not. gotcha!
}


// That's why JS came up with for of.
// for of
for(let value of arr) {
    console.log(value);
}