function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Никита", "male", 19);
let student2 = new Student("Мария", "female", 18);
let student3 = new Student("Екатерина", "female", 20);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if ("marks" in this) {
    for(mark of marks) {
      this.marks.push(mark);
    }
  }
}

Student.prototype.getAverage = function () {
    if ("marks" in this === false){
        return 0;
    }
    if (this.marks.length === 0) {
        return 0;
    } 
        let sum = this.marks.reduce((acc, item) => acc + item, 0);
        return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

