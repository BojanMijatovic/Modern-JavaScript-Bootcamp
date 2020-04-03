
// setTimeout(() => {
//   btn.removeEventListener('click', btnClickHandler);
// }, 2000);


// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log(e);
// }
// )


// --- Pure Functions 


// const add = (x, y) => x + y;
// console.log(add(2, 3));


// let maxNum = Math.random();
// console.log(maxNum);

// console.log('First');

// setTimeout(() => {
//   console.log('Time out');
// }, 2000);

// console.log('After');



const btn = document.querySelector('button');

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {  // promise
    setTimeout(() => {
      resolve('Done!');
    }, duration);
  })
  return promise;
}


const btnClickHandler = () => {
  navigator.geolocation.getCurrentPosition(posData => {
    setTimer(2000).then(data => {  // func with promise
      console.log(data, posData);
    });
  }, error => {
    console.log(error);
  });

  setTimer(1000).then(() => {
    console.log('Just practice');
  })

  console.log('Before Geolocation'); // after navigator and geolocation
};



btn.addEventListener('click', btnClickHandler);
