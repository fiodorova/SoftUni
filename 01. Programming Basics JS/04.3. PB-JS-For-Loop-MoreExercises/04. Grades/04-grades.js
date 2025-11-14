function grades(input) {
    let students = Number(input[0]);
    let topGr = 0;
    let fourGr = 0;
    let threeGr = 0;
    let fail = 0;
    let totalGrade = 0;

    for(let i = 1; i <= students; i++) {
        let grade = Number(input[i]);
         if (grade >= 5) {
            totalGrade += grade;
            topGr++;
         } else if (grade >= 4 && grade <= 4.99) {
            totalGrade += grade;
            fourGr++;
         } else if (grade >= 3 && grade <= 3.99) {
            totalGrade += grade;
            threeGr++;
         } else if (grade >= 2 && grade <= 2.99) {
            totalGrade += grade;
            fail++;
         }
    }

    console.log(`Top students: ${(topGr / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(fourGr / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(threeGr / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(fail / students * 100).toFixed(2)}%`);
    console.log(`Average: ${(totalGrade / students).toFixed(2)}`);
}

grades(["6", "2", "3", "4", "5", "6", "2.2"])