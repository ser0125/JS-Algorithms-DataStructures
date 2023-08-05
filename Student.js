class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    static printName() {
        return "Nombre"
    }
}

const sergio = new Student("Sergio", "Llanos")
console.log(Student.printName())