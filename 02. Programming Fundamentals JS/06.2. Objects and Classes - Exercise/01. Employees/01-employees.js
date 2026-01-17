function employees(input){
    for (let i = 0; i < input.length; i++) {
        let employee = {};

        employee.name = input[i];
        employee.number = input[i].length

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    )