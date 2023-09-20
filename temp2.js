"use strict";
const company = {
    isDone: false,
    count: 0,
    employees: ['bob', 'kim', 'joe'],
    wolfNext() {
        if (this.count >= this.employees.length) {
            return { value: this.employees[this.count], count: this.count, done: true };
        }
        const temp = { value: this.employees[this.count], count: this.count, done: false };
        this.count++;
        return temp;
    },
};
// company.wolfNext(); //?
// company.wolfNext(); //?
// company.wolfNext(); //?
// company.wolfNext(); //?
let kimbo = company.wolfNext.bind(company);
while (!company.isDone) {
    kimbo(); //?
}
