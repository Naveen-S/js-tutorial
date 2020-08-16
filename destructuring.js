// Object destructuring
const name = { firstName: 'Tai Tzu', lastName: 'Ying', age: 25 };
const fname = name.firstName; // old way
const {lastName:lname} = name; // new way
const { age } = name; // If you want to keep the variable name as is.

console.log('fname: ', fname);
console.log('lname: ', lname);
console.log('age: ', age);


// Array destructing
const numbers = [34, 26, 36];
const [ length, breadth, height ] = numbers;
console.log('length ', length );
console.log('breadth ', breadth);
console.log('height ', height);


// function parameters destructuring
function login({username, password}) {
    console.log('username ', username);
    console.log('password ', password);
}
login({username: 'Axelson', password: 'LoveTTY!'});