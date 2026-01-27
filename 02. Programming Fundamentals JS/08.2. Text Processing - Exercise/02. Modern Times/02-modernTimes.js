function hashtag(text){
    let tokens = text.split(' ');
    let result = [];

    for(let token of tokens){
        if(token.length > 1 && token[0] == '#'){
            let valid = true;
            for(let char of token.substring(1)){
                let code = char.charCodeAt(0);
                if(code < 65 || code > 122 || (code >= 91 && code <= 96)){
                    valid = true;
                    break;
                }
            }

            if(valid) {
                result.push(token.substring(1))
            }
        }
    }

    for (let word of result){
        console.log(word);
    }
}

hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')
hashtag('The symbol # is known #variously in English-speaking #regions as the #number sign')