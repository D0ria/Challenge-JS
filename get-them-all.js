export function getArchitects(){
    const architectArray = document.getElementsByTagName("a")
    const nonArchitectArray = document.getElementsByTagName("span")
    return [[...architectArray], [...nonArchitectArray]]
}

export function getClassical(){
    const classicalArray = document.getElementsByClassName("classical")
    const nonClassicalArray = document.querySelectorAll("a:not(.classical)")
    return [[...classicalArray], [...nonClassicalArray]]
}

export function getActive(){
    const isActiveArray = document.getElementsByClassName("active")
    const isNotActiveArray = document.querySelectorAll("a:not(.active)")
    return [[...isActiveArray], [...isNotActiveArray]]
}

export function getBonannoPisano(){
    const bonnanoArray = document.getElementById("BonannoPisano")
    const notBonnanoArray = document.querySelectorAll("a:not(BonannoPisano)")
    return [bonnanoArray, [...notBonnanoArray]]
}