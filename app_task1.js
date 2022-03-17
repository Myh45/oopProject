class Student {
    constructor(fullName, direction) {
        this.fullName = fullName;
        this._direction = direction;
    }

    showFullName() {
        return this.fullName;
    }

    nameIncludes(data) {
        return this.showFullName().includes(data);
    }

    static studentBuilder() {
        return new Student('Ihor Kohut', 'qc');
    }

    get direction() {
        return this._direction;
    }

    set direction(value) {
        if (value) this._direction = value;
    }

}

let stud1 = new Student('Ivan Petrenko', 'web');
let stud2 = new Student('Sergiy Koval', 'python');
let stud3 = Student.studentBuilder();

console.log(stud1.nameIncludes('Ivan'));
console.log(stud1.nameIncludes('Denysenko'));