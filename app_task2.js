class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return this.surname + ' ' + this.name;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        return middleName ? super.showFullName() + ' ' + middleName : super.showFullName();
    }

    showCourse(){
        let currentYear = new Date().getFullYear();
        let course = currentYear-this.year;
        return course <= 6 && course > 0 ? course : 'not a student 😜';
    }
}

const stud1 = new Student("Petro", "Petrenko",2017);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());