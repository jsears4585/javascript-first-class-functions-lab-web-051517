var countdown = (callback) => {
  setTimeout(function(){
    callback()
  }, 2000)
}

var createMultiplier = (a) => {
  return function(b) {
    return a * b
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
var multiplier = createMultiplier.apply(null, [20000, 30000])
var doublerWithBind = createMultiplier.bind(null, 2)
var triplerWithBind = createMultiplier.bind(null, 3)
