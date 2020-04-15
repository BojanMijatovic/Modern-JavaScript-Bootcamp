
const todos = ['Learn React', 'Angular', 'JavaScript', 'Redux', 'JSON', 'Flexbox'];


todos.splice(1, 1);
todos.push('Work on UpWork')
todos.shift();

todos.forEach((todo, i) => console.log(`${i + 1} ${todo}`));      // for Each loop

console.log(`You have ${todos.length} todos left`);


for (let i = 0; i < todos.length; i++) {                          // with for loop
  // console.log(`${i + 1} ${todos[i]}`);
}