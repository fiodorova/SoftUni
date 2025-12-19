function chessBoard(num) {
    console.log(`<div class="chessboard">`);
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 1) {
            console.log(`  <div>`);
            for (let i = 1; i <= num; i++) {
                if (i % 2 === 1) {
                    console.log(`   <span class="black"></span>`);
                } else {
                    console.log(`   <span class="white"></span>`);
                }
            }
            console.log(`  </div>`);

        } else {
            console.log(`  <div>`);
            for (let i = 1; i <= num; i++) {
                if (i % 2 === 1) {
                    console.log(`   <span class="white"></span>`);
                } else {
                    console.log(`   <span class="black"></span>`);
                }
            }
            console.log(`  </div>`);

        }
    }
console.log(`</div>`);
}

chessBoard(5)