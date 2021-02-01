class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'meherun nesa high school';
    }
}

const student1 = new Student(11, "shuvo");
const student2 = new Student(22, "maheya");
const student3 = new Student(20, "rayhan");
console.log(student1, student2, student3);
console.log(student1.name, student2.name, student3.name);
console.log(student3);