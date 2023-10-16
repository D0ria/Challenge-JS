function repeat(arg1, arg2){
    let final = ''
    while (arg2 > 0) {
        final += arg1
        arg2--
    }
    return final
}

console.log(repeat("Salut", 3))