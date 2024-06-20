let id: number = 5
let comoany: string = 'Aden Media'
let isPublished: boolean = true                                                                                                                                     


let person: [ number,string , boolean ] = [ 3,"Aden" , true]

let pid: string| number
pid = 22
pid = "Aden"

enum dir1{
    Up,
    Down
}

console.log(dir1.Down)

type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

let cis: any = 1
let cid = cis as number


interface UserInterface{
    id: number 
    name: string
}

const user1: UserInterface = {
    id: 1,
    name: "John"
}

class Person{
    id: number
    name: string

    constructor(id: number , name: string){
        this.id = id
        this.name = name 
    }

    register() {
        return `${this.name} is now registered`
    }
}

const Aden = new Person(1,"Aden John")
const Brad = new Person(2, "Brad Shaw")

console.log(Aden.register())

console.log(Aden,Brad)


class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string) { 
        super (id,name)
        this.position =position 
    }
}

const emp = new Employee(3, "Aden", 'Developer')

console.log(emp.register())