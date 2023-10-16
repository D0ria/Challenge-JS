function indexOf(searchElement, target, index = 0){
    for (let i=index; i< searchElement.length; i++) {
        if (searchElement[i] === target){
            return i
        }
    }
    return -1
}

function lastIndexOf(searchElement, target, index = 0){
    if (index != 0) {
        index
        } else {
            index = searchElement.length - 1 
        }
            for (let i = index; i >= 0; i--) {
                if (searchElement[i] === target){
                    return i
            }
        }
    return -1
}

function includes(searchElement, target){
    for (let i= searchElement.length-1; i>=0; i--) {
        if (searchElement[i] === target){
            return true
        }
    }
    return false
}

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2))