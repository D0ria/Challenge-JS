function words(arg1) {
    return arg1.split(" ")
}

function sentence(arg){
    return arg.join(" ")
}

function yell(arg1){
    return arg1.toUpperCase()
}

function whisper(arg1){
    return "*"+ arg1.toLowerCase() + "*"
}

function capitalize(arg1){
    return arg1[0].toUpperCase() + arg1.slice(1).toLowerCase()
}

console.log(words('a,b,c'), sentence(['a', 'b', 'c']), yell('a b c'), whisper('ABC'), capitalize('a b c'))