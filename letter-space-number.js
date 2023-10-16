function letterSpaceNumber(str){
    let space = /(\w\s\d)(?!(\w))/g
    if (str.match(space) == null) {
        return []
    }
    return str.match(space)
}