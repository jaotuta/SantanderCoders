class Person {
    constructor(name, age, gender, interests) {
         this.name = name
         this.age = age
         this.gender = gender
         this.interests = interests
    }

    get bio () {
        return `${this.name} is ${this.age} years old. They like ${this.interests}`
    }

    get greeting () {
        return `Hi!, I'm ${this.name}`
    }
}

class Teacher extends Person {
    constructor(name, age, gender, interests, subject) {
        super(name, age, gender, interests)
        this.subject = subject
    }

    get greeting () {
        return `Hi!, My name is ${this.name}, and I teach ${this.subject}`
    }
}

class Student extends Person {
    get greeting () {
        return `Yo!, I'm ${this.name}`
    }
}


const pessoa = new Person('João Lucas',30, 'M', ['JS', 'C++', 'Java'] )
const professor = new Teacher('Carol', 27, 'F', ['JS', 'Python'], 'JavaScript')
const aluno = new Student('Pedro', 20, 'M', ['Games', 'Unity'])

console.log(professor.subject)
console.log(pessoa)
console.log(pessoa.interests)
console.log(aluno.greeting)