Array.prototype.myReduce = function (fn, initial) {
    let values = this;
    console.log(values);
    values.forEach((item) => {
        initial = initial != undefined ? fn(initial, item) : item;
    })
    return initial;
}

var a = [1,2,4];
a.myReduce((i,j) => { return i*j}, 10);
