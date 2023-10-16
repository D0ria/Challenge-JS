const escapeStr = "`" + "\\'" + '"' + "/" 

const arr = [4, '2']
Object.freeze(arr)

const obj = {
    str: "value",
    num: 5,
    bool: false,
    undef: undefined,
}
Object.freeze(obj)

const nested = {
    arr: [4,undefined,'2'],
    obj : {
        str: "value",
        num: 5,
        bool: false,
    }
}
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)

console.log(escapeStr, arr, obj, nested)