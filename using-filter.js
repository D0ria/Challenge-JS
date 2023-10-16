function filterShortStateName(myArr) {
    return myArr.filter(myArr => myArr.length < 7)
}

function filterStartVowel(myArr){
    return myArr.filter((elem) => /[a|i|u|e|o]/gi.test(elem[0]))
}                           

function filter5Vowels(myArr){
    return myArr.filter(myArr => myArr.match(/[aeiou]/gi).length >=  5)
}

function filter1DistinctVowel(myArr) {
    return myArr.filter(myArr => { 
        let str = myArr.match(/[aeiouyAEIOUY]/gi)
        Boucle :
        for (let i = 0;i<str.length-1;i++){
            for(let j = i + 1 ;j<str.length;j++){
                if (str[i].toUpperCase() === str[j].toUpperCase()) {
                    return myArr
                } else {
                    break Boucle
                }
            } 
        }
    })
}



function multiFilter(myArr) {
    myArr.filter((elem) => (elem[capital]).length < 8)
    myArr.filter((elem) => /[b|c|d|f|g|h|j|k|l|m|n|o|p|q|r|s|t|v|w|x|z]/gi.test(elem[0]))
}


console.log(filterShortStateName(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']))
console.log(filterStartVowel(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']))
console.log(filter5Vowels(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present' ]))
console.log(filter1DistinctVowel(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present' ]))