
/*
1. Block Scope.
2. Global Scope.
3. Lexical Scope.
4. Data type.
5. Math Library.
6. Number Library.
7. Strings.
8. Prototype inheritance.
9. Boolean.
10. Symbols
11. Type conversion
12. Operators.
13. Statements.
14. Reference Data type. (Class, Object, array, etc).
15. How to add methods to object.
16. Maps and Sets.
17. Functions declaration & expression.
18. Default parameter.
19. Spread operators.
20. Call back Function (Imp).
21. OOP in JS.
22. Arrow Functions.
23. Functional programming. Call, apply & bind.
24. Closures.
25. Asynchronous in JS.
26. Promises.
27. DOM & navigation.
28. Event Bubbling.
29. Proxy reflection.
30. Regex
31. Web Workers.
32. Generators.
*/


const card = {
  account: 'user',
  balance: 0,
  cards: ['Master', 'Visa'],
  addIncome(income) {
    return this.balance += income;
  },
  removeMoney(money) {
    return this.balance -= money;
  },
  changeNameUser(name) {
    return this.account = name;
  },
  showName() {
    return console.log(`Welcome ${this.account}`);
  },

}

card.addIncome(100);
card.removeMoney(15);
card.changeNameUser('Tom');
card.showName()
console.log(card);

