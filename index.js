function countdown(callback){
  window.setTimeout()
  callback()
}

function createMultiplier(multiplierValue){
  return (value)=>{value*multiplierValue}
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(value1, value2){
  return value1 * value2
}

doublerWithBind = multiplier(2)
triplerWithBind = multiplier(3)
