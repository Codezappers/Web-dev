"use strict";
let id = 5;
let comoany = 'Aden Media';
let isPublished = true;
let person = [3, "Aden", true];
let pid;
pid = 22;
pid = "Aden";
var dir1;
(function (dir1) {
    dir1[dir1["Up"] = 0] = "Up";
    dir1[dir1["Down"] = 1] = "Down";
})(dir1 || (dir1 = {}));
console.log(dir1.Down);
const user = {
    id: 1,
    name: 'John'
};
let cis = 1;
let cid = cis;
const user1 = {
    id: 1,
    name: "John"
};
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Aden = new Person(1, "Aden John");
const Brad = new Person(2, "Brad Shaw");
console.log(Aden.register());
console.log(Aden, Brad);
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Aden", 'Developer');
console.log(emp.register());
