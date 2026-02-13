function biggerHalf(nums){

    nums.sort((a, b) => a - b);

    const result = [];

    for(let i = Math.floor(nums.length / 2); i < nums.length; i++){
        result.push(nums[i])
    }

    return result;
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);
pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);