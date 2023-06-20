class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    getFullName(){
        return this.firstName + " "+ this.lastName
    }
}
let p = new Person("Angel", "Fraser")
console.log(p.getFullName())