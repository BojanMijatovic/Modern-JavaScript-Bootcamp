
let a = 'test';


if (a) {
  console.log(`This is local scope ${a}`);
  let b = 'two';
  a = 'one'
  console.log(`This is same local scope ${a}`);

  console.log(b);
}

console.log(`This is global scope ${a}`);


//  Scope Name
let name = 'Andy';

if (true) {
  let name = 'Mike'
  if (true) {
    console.log(name);

  }

  console.log(name);

}

console.log(name);
