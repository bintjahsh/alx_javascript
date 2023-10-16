const myObject = {
    type: 'object',
    value: 12,
    incr: function () {
        return this.value++;
    }
};
console.log(myObject);

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);