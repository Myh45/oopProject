class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    #experience = 1.2;

    get showExp() {
        return this.#experience;
    }
    set setExp(value) {
        if (value) this.#experience = value;
    }

    showFullName() {
        return this.fullName;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience() {
        return this.showSalary() * this.#experience;
    }
}

function sortWorkers(...items) {
    items.sort(function(a,b){
        return a.showSalaryWithExperience() - b.showSalaryWithExperience();
    });
    console.log('Sorted salary: ')
    items.forEach(i => console.log(i.fullName + ': ' + i.showSalaryWithExperience()));
}




const worker1 = new Worker("John Jhonson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.fullName + ' salary: ' + worker1.showSalary());
console.log("New experience: " + worker1.showExp);
console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
console.log('\n\n');

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.fullName + ' salary: ' + worker2.showSalary());
console.log("New experience: " + worker2.showExp);
console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());
console.log('\n\n');

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.fullName + ' salary: ' + worker3.showSalary());
console.log("New experience: " + worker3.showExp);
console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());
console.log('\n\n');

sortWorkers(worker1, worker2, worker3);

