function wordsTracker(input){
    let words = {}

    let searchWords = input.shift().split(' ');
    for (let word of searchWords) {
        words[word] = 0;        
    }

    for (let word of input) {
        if(words.hasOwnProperty(word)){
            words[word]++
        }        
    }

    let sorted = Object.entries(words).sort((a, b) => b[1] - a[1])

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);        
    }
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )
wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )