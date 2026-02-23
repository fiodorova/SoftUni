function rectangle(width, height, color){

    color = color.split('');
    let firstChar = color.shift().toUpperCase();
    
    color = firstChar + color.join('');    

    let obj = {
        width,
        height,
        color,

        calcArea() {
            return this.width * this.height;
        }
    }

    return obj
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());