#!/usr/bin/node
const superSquare = require('./5-square');
class Square extends superSquare {
    charPrint(c) {
        for (let i = 0; i < this.size; i++) {
            let square_print = '';
            for (let j = 0; j < this.size; j++) {
                if (c) {
                    square_print += c;
                } else {
                    square_print += 'X'
                }
                
            }
            console.log(square_print)
        }
    } 
}

module.exports = Square