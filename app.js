// Budget Controller
const budgetController = (function() {

})();

// UI Controller
const UIController = (function() {
  const DomStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'
  }
  return {
    getInput: function() {
      return {
        type: document.querySelector(DomStrings.inputType).value,
        description: document.querySelector(DomStrings.inputDescription).value,
        value: document.querySelector(DomStrings.inputValue).value
      };
    },
    getDOMStrings: function() {
      return DomStrings;
    }
  }
})();

// Global App Controller
const controller = (function(budgetCtrl, UICtrl) {

  const setUpEventListeners = function() {
    
    const DOM = UICtrl.getDOMStrings();
    
    document.querySelector(DOM.inputButton).addEventListener('click', crtlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        crtlAddItem();
      }
    });
  };
  

  const crtlAddItem = function() {
    // 1. Get field input data
    let input = UICtrl.getInput();
    console.log(input);
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };

  return {
    init: function(){
      console.log('Application has started');
      setUpEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();