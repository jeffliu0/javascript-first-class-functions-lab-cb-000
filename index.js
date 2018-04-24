function countdown(callback){
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){
  return value=>{value*multiplierValue}
}

var doubler = n=> {n*createMultiplier(2)}
var tripler = createMultiplier(3)

function multiplier(value1, value2){
  return value1 * value2
}

doublerWithBind = multiplier(2).bind(doubler)
triplerWithBind = multiplier(3).bind(tripler)
