function countdown(callback){
  window.setTimeout()
  return callback
}

function createMultiplier(multiplierValue){
  return (n)=>{n*multiplierValue}
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)