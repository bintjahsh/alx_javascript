#!/usr/bin/node
const Rectangle = require('./4-rectangle');
class Square extends Rectangle {
    constructor (size) {
        super()
        if (size > 0) {
            this.width = size;
            this.height = size;
        }
    }
}

// const square = new Square(4)
// square.print();
// square.double();
// square.print();

module.exports = Square