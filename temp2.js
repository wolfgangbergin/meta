"use strict";
const company = {
    count: 0,
    employees: ['bob', 'kim', 'joe'],
    wolfNext() {
        let isDone = false;
        if (this.count === this.employees.length) {
            return (isDone = true);
        }
        const temp = this.employees[this.count];
        this.count++;
        return temp;
    },
};
company.wolfNext(); //?
company.wolfNext(); //?
company.wolfNext(); //?
company.wolfNext(); //?
