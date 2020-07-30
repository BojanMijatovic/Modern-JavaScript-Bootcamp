


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

  closeBtn.addEventListener('click', function () {
    ui.hideQuestion(questionCard);
  });

  //add form questions and answers
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const questionValue = questionInput.value;
    const answerValue = answerInput.value;

    if (questionValue.trim() === '' || answerValue.trim() === '') {
      feedback.classList.add('showItem', 'alert-danger');
      feedback.textContent = `Please insert real values`;

      setTimeout(function () {
        feedback.classList.remove('showItem', 'alert-danger');
      }, 2000);
    }
    else {

    }

  })
}

// user interface constructor function
function UI() { }

//  show question card
UI.prototype.showQuestion = function (element) {
  element.classList.add('showItem');
}

//hide question card
UI.prototype.hideQuestion = function (element) {
  element.classList.remove('showItem');
}

//  question constructor function
function Question(id, title, answer) { }

//dom event
document.addEventListener('DOMContentLoaded', function () {
  eventListeners();
})