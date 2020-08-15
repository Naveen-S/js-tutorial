// Pass by value and pass by reference

// case 1
// primitive types
var a = true;
function foo (a) {
    a = false;
}
console.log(a); 


// case 2 
// Objects

var obj = { balls: 5};
function bar (obj) {
    obj.bat = 2;
}
bar(obj);
console.log("obj: ", obj);

// arrays
var nums = [10, 2, 6];
function foobar (nums) {
    nums.push('someshit');
}
foobar(nums);
console.log("nums: ", nums);


// Answer this
var ex = { rama: 1, krish: 5};
function barfoo(ex) {
    ex = { shetty: 3};
}
barfoo(ex);
console.log('ex: ', ex);