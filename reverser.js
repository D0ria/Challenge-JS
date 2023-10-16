function reverse(arg){
    if (typeof arg === "string") {
        let uno = ""
        for (let i = arg.length - 1; i >= 0; i--) {
            uno += arg[i]
        }
        return uno
    } else if (typeof arg === "object") {
        let myArr = []
        for (let i = arg.length - 1; i >= 0; i--){
            myArr.push(arg[i])
        }
        return myArr
    }
}

console.log(reverse([1,2,3]))
console.log(reverse("Hello"))