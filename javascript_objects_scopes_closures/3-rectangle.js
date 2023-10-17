#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;   
        }
    }

    print() {
        for (let i = 0; i < this.height; i++) {
            let rectangle_print = '';
            for (let j = 0; j < this.width; j++) {
                rectangle_print += 'X';
            }
            console.log(rectangle_print)
        }
    }
}

// const rectangle = new Rectangle(4, 5)
// rectangle.print();

module.exports = Rectangle