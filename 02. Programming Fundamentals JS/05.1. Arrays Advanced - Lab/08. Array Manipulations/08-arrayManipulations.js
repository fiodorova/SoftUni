function arrayManipulations(input){
    let array = input.shift().split(' ').map(Number);
   
    for(let i = 0; i < input.length; i++){
        let command = input[i].split(' ');
        let action = command[0];
        let number = Number(command[1]);
        let index = Number(command[2]);

        switch(action){
            case 'Add': add(number); break;
            case 'Remove': remove(number); break;
            case 'RemoveAt': removeAt(number); break;
            case 'Insert': insert(number, index); break;
        }

        function add(num){
            array.push(num)
        }

        function remove(num){
            array = array.filter(x => x !== num)
        }

        function removeAt(index){
            array.splice(index, 1);
        }

        function insert(num, i){
            array.splice(i, 0, num)
        }        
    }

    console.log(array.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)
