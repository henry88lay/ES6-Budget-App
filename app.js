const budgetController = (function() {
  let x = 23;
  const add = function(a) {
    return x + a;
  }
  return {
    publicTest: function(b) {
      console.log(add(b))
    }
  }
})();

const UIController = (function() {
  
})();