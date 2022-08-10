// Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol){
    let save = (discount/100)*normPrice
    return Math.floor(hol/save)
}