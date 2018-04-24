function countdown(callback){
  window.setTimeout()
  callback()
}

function createMultiplier(multiplierValue){
  return (value)=>{value*multiplierValue}
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
