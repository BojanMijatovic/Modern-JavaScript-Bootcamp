


// event listeners 
function eventListeners() {
  //selectors
  const showBtn = document.getElementById("show-btn");
  const questionCard = document.querySelector(".question-card");
  const closeBtn = document.querySelector(".close-btn");
  const form = document.getElementById("question-form");
  const feedback = document.querySelector(".feedback");
  const questionInput = document.getElementById("question-input");
  const answerInput = document.getElementById("answer-input");
  const questionList = document.getElementById("questions-list");
  let data = [];
  let id = 1;

  //  new instance
  const ui = new UI();

  showBtn.addEventListener('click', function () {
    ui.showQuestion(questionCard);
  });

}

// user interface constructor function
function UI() { }

//  show question card
UI.prototype.showQuestion = function (element) {
  element.classList.add('showItem');
}

//hide question card


// single question constructor function
function Question() { }

//dom event
document.addEventListener('DOMContentLoaded', function () {
  eventListeners();
})