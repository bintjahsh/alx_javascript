#!/usr/bin/node
const Square = require('./5-square');
class Square extends Square {
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