interface ISay {
  sayHi(): void;
}

class Person implements ISay {
  protected static personId: number = 0;
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`我是${this.name},${this.age}岁了！`);
    console.log(`我是第 ${Person.personId} 个被创建的人`);
  }
}
let p: Person = new Person("person", 18);
console.log(p);
p.sayHi();

class Student extends Person {
  private static studentId: number = 0;
  score: number;
  constructor(name: string, age: number, score: number) {
    super(name, age);
    this.score = score;
    Person.personId++; // 每次创建学生时 personId 和 studentId 都需自增1
    Student.studentId++;
  }
  sayHi(): void {
    super.sayHi();
    console.log(`我的分数是${this.score}`);
    console.log(`我是第 ${Student.studentId} 个学生`);
  }
}
let s = new Student("student1", 17, 98);
console.log(s);
s.sayHi();

class Teacher extends Person {
  private static teacherId: number = 0;
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
    Person.personId++; // 每次创建教师时 personId 和 teacherId 都需自增1
    Teacher.teacherId++;
  }
  sayHi(): void {
    super.sayHi();
    console.log(`我的等级是${this.grade}`);
    console.log(`我是第 ${Teacher.teacherId} 个老师`);
  }
}
let t = new Teacher("teacher1", 37, "特级教师");
console.log(t);
t.sayHi();

let s2 = new Student("student2", 17, 92);
console.log(s2);
s2.sayHi();
