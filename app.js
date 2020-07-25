// Budget Controller
const budgetController = (function() {

})();

// UI Controller
const UIController = (function() {

})();

// Global App Controller
const controller = (function(budgetCtrl, UICtrl) {

  const crtlAddItem = function() {
    // 1. Get field input data
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
    console.log('this works')
  }

  document.querySelector('.add__btn').addEventListener('click', crtlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      crtlAddItem();
    }
  });
})(budgetController, UIController);