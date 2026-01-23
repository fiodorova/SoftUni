function partyTime(input){
    let vipInv = [];
    let regInv = [];

    while(input[0] !== "PARTY"){
        let guest = input.shift();
        if(Number.isNaN(Number(guest[0]))){
            regInv.push(guest);
        } else {
            vipInv.push(guest)
        }
    }

    for (let guest of input) {
        if(vipInv.includes(guest)){
            let index = vipInv.indexOf(guest)
            vipInv.splice(index, 1);
        }

        if(regInv.includes(guest)){
            let index = regInv.indexOf(guest)
            regInv.splice(index, 1);
        }        
    }

    console.log(vipInv.length + regInv.length);
    vipInv.forEach((x) => console.log(x));
    regInv.forEach((x) => console.log(x));
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'])
console.log(('---'));
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'])

