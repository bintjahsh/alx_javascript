#!/usr/bin/node
class Square extends Rectangle {
    size;

    constructor (size) {
        super()
        this.width = size;
        this.height = size;
    }
}

// const square = new Square(4)
// square.print();
// square.double();
// square.print();

module.exports = Square