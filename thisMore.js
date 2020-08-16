/* 
    Note: Run in browser.
*/
const obj = {
    name: 'Jack',
    sing() {
        console.log('a', this); // obj
        var fun = function() {
            console.log('b' , this); // window
        }
        fun();
    }
}
obj.sing();

console.log('-----------------------');
// Solution 1 
const obj1 = {
    name: 'Jack',
    sing() {
        console.log('a', this); // obj1
        var fun = () => {
            console.log('b' , this); // obj1
        }
        fun();
    }
}
obj1.sing();

console.log('-----------------------');

// Solution 2
const obj2 = {
    name: 'Jack',
    sing() {
        console.log('a', this); // obj2
        var fun = function() {
            console.log('b' , this); // obj2 (thanks to the binding below)
        }
        fun.bind(this)(); 
        fun.call(this); // call with the scope/context of this.
        fun.apply(this); // call with the scope of this.
    }
}
obj2.sing();

console.log('-----------------------');

// Solution 3 
const obj4 = {
    name: 'Jack',
    sing() {
        var me = this; // To maintain the scope in inner function.
        console.log('a', this); // obj4
        var fun = function () {
            console.log('b' , this); // Will be window
            console.log('use me ', me); // obj4
        }
        fun();
    }
}
obj4.sing();
