function isValid(date) {
    if (isNaN(date) || date == 0){
        return false
    } else {
        return true
    }
}

function isAfter(date1, date2) {
    let date3 = date1 - date2 
    if (date3 > 0) {
        return true
    } else {
        return false
    }
}

function isBefore(date1, date2) {
    let date3 = date1 - date2 
    if (date3 < 0) {
        return true
    } else {
        return false
    }
}

function isFuture(date) {
    let date3 = new Date()
    let dateFinal = date - date3
    if (dateFinal>0){
        return true
    } else {
        return false
    }
}

function isPast(date) {
    let date3 = new Date()
    let dateFinal = date - date3
    if (dateFinal < 0 && isValid(date)){
        return true
    } else {
        return false
    }
}