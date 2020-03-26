
class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
}

//  Work with Extends Class

class Student extends Person {
  student = new Person('Smith', 'Ford', 33)

  readBook() {
    return `${this.student.name} ${this.student.lastName} read book`;
  }
}


class bestBook extends Student {
  book = 'Templars';
  name = 'John';
  readBook() {
    return `${this.name} read ${this.book}`
  }
}

const smith = new Student();
console.log(smith.student);
console.log(smith.readBook());


john = new bestBook();
console.log(john.readBook());

