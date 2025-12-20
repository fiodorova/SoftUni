function reverseAnArrayOfNumbers(n, arr){
      let slice = [];
    
      for(let i = n - 1; i >= 0; i--){
        slice.push(arr[i])
    }  
    console.log(slice.join(' '));


// 2-ро решение
    // let slice = [];
    // for(let i = 0; i < n; i++){
    //     slice.push(arr[i])
    // }

    // let result = ''
    // for(let i = slice.length - 1; i >= 0; i--){
    //     result += slice[i];
    //     result += ' '
    // }
    //   console.log(result);
 /*  3-то решение
    let result2 = []
    for(let i = slice.length - 1; i >= 0; i--){
        result2.push(slice[i]);
       
    }
    console.log(result2.join(' '));
*/



}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
console.log('---');
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])
console.log('---');
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])