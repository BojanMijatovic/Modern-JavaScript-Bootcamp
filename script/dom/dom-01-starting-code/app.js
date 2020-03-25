const title = document.getElementById('main-title');
title.classList = 'title';
title.textContent = 'New Dom Title';

// -------------- First Example ------------
//  Selectors 
// const textItem = document.getElementById('text').value;
// const btnAdd = document.querySelector('.add-text');


//  add Items to list
// const addTextItems = () => {
//   const liText = document.createElement('li');
//   liText.textContent = textItem;
//   liText.classList = 'test';
//   document.getElementById('list-items').append(liText);
// }


// btnAdd.addEventListener('click', addTextItems);

// ------- Second Example -----

const states = [];
const btnAddState = document.querySelector('.add-cases');
const ulStates = document.getElementById('list-states');


//  Add state
const addStates = () => {
  const stateName = document.getElementById('state-value').value;
  const caseValue = document.getElementById('cases-value').value;
  const addInfo = document.getElementById('info-value').value;

  const state = {
    name: stateName,
    activeCases: caseValue,
    disease: addInfo
  }

  //  Render State
  const renderState = () => {
    const newState = document.createElement('li');
    newState.innerHTML = `<p>State ${state.name}</p>
      <p>Active cases ${state.activeCases}</p>
      <p>Info ${state.disease}</p>`
    ulStates.append(newState);

    //  Danger status
    if (state.activeCases > 100) {
      newState.classList = 'danger';
    } else if (state.activeCases > 50 && state.activeCases < 100) {
      newState.classList = 'critical'
    }
  }

  renderState();
  states.push(state)
}


btnAddState.addEventListener('click', addStates);