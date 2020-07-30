


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
      // create new Question
      const question = new Question(id, questionValue, answerValue);
      data.push(question);
      id++;
      ui.addQuestion(questionList, question);
      ui.clearFields(questionInput, answerInput);
    }
  });
  // work with questions
  questionList.addEventListener('click', function (e) {
    e.preventDefault();

    //delete question
    if (e.target.classList.contains("delete-flashcard")) {
      questionList.removeChild(event.target.parentElement.parentElement.parentElement);
    }
    // show hide answer
    else if (e.target.classList.contains("show-answer")) {
      e.target.nextElementSibling.classList.toggle("showItem");
    }
    // edit 
    else if (e.target.classList.contains("edit-flashcard")) {
      let id = e.target.dataset.id;
      // remove from dom 
      questionList.removeChild(event.target.parentElement.parentElement.parentElement);
      // show question card
      ui.showQuestion(questionCard);

      const tempQuestion = data.filter(function (question) {
        return question.id === parseInt(id);        // must because dataset returns string ID
      });
      let tempData = data.filter(function (item) {
        return item.id !== parseInt(id);
      })
    }
  });
};

// user interface constructor function
function UI() { }

// create generic functions to prototype
//  show question card
UI.prototype.showQuestion = function (element) {
  element.classList.add('showItem');
}

//hide question card
UI.prototype.hideQuestion = function (element) {
  element.classList.remove('showItem');
}

//clear inputs
UI.prototype.clearFields = function (question, answer) {
  question.value = '';
  answer.value = '';
}

//  add question
UI.prototype.addQuestion = function (element, question) {
  const div = document.createElement('div');
  div.classList.add('col-md-4');
  div.innerHTML = ` <div class="card card-body flashcard my-3">
            <h4 class="text-capitalize">${question.title}</h4>
            <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
            <h5 class="answer mb-3">${question.answer}</h5>
            <div class="flashcard-btn d-flex justify-content-between">
              <a
                href="#"
                id="edit-flashcard"
                class="btn my-1 edit-flashcard text-uppercase"
                data-id="${question.id}"
                >edit</a>
              <a
                href="#"
                id="delete-flashcard"
                class="btn my-1 delete-flashcard text-uppercase"
                >delete</a>
            </div>
          </div>`;
  element.append(div);
}

//  question constructor function
function Question(id, title, answer) {
  this.id = id;
  this.title = title;
  this.answer = answer;
}

//dom event
document.addEventListener('DOMContentLoaded', function () {
  eventListeners();
})