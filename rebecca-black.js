function isFriday(date) {
    if (date.getDay() === 5) {
        return true 
    } else {
        return false
    }
}

function isWeekend(date) {
    if (date.getDay() === 6 || (date.getDay() === 7)){
        return true
    } else {
        return false
    }
}

function isLeapYear(date) {
    date.setDate(date.getDate() + 28)
    return date.getMonth() === 1
}

function isLastDayOfMonth(date) {
    let currMonth = date.getMonth()
    date.setDate(date.getDate() + 1)
    return date.getMonth() !== currMonth
}

console.log(isFriday(new Date('2014-08-29')))
console.log(isWeekend(new Date('2020-05-30')))