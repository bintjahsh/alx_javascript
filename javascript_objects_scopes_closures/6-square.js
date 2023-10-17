#!/usr/bin/node
const superSquare = require('./5-square');
class Square extends superSquare {
    constructor (size) {
        super(size);
    }
    charPrint(c) {
        for (let i = 0; i < this.width; i++) {
            let square_print = '';
            for (let j = 0; j < this.height; j++) {
                if (c) {
                    square_print += c;
                } else {
                    square_print += 'X';
                }   
            }
            console.log(square_print)
        }
    } 
}

// const s1 = new Square(4);
// s1.charPrint();

// s1.charPrint('D');
// console.log('Hello')

module.exports = Square