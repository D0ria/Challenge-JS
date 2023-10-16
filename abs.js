function isPositive(num) {
    if (num > 0){
        return true
    }
    else {
        return false
    }
}

function abs(num) {
    if (num < 0) {
        return num * -1
    }
    if (num == 0) {
        return 0
    }
    return num
}
console.log(isPositive(-1), abs(-30))