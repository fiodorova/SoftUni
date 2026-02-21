function carFactory(obj){
    let car = {};
    let engine = {};
    let carriage = {};

    car.model = obj.model;

    if(obj.power <= 90){
        engine.power = 90;
        engine.volume = 1800;
    } else if(obj.power <= 120){
        engine.power = 120;
        engine.volume = 2400;
    } else if(obj.power <= 200){
        engine.power = 200;
        engine.volume = 3500;
    }

    carriage.type = obj.carriage;
    carriage.color = obj.color;

    if(obj.wheelsize % 2 === 0){
        obj.wheelsize--;
    }

    car.engine = engine;
    car.carriage = carriage;
    let size = obj.wheelsize; 
    car.wheels = [size, size, size, size];

    return car;
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);
