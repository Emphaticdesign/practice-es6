class Parent{
    constructor(name){
        this.father = "Sakib Khan";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name+ " " + this.father;
    }
}

const baby = new Child("Anrold");
const baby2 = new Child("Tom");
console.log(baby.getFullName(), baby2.getFullName());