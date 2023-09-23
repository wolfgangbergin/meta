"use strict";
({
    // "autoLog": true,
    showValueOnSelection: true,
    // showSingleInlineValue: false,
});
const company = {
    age: 10,
    // curEmploee: 0,
    fName: 'banana',
    employees: ['bob', 'kim', 'joe'],
    // next() {
    //     if (this.curEmploee >= company.employees.length) {
    //         return { value: this.curEmploee, done: true };
    //     }
    //     const returnValue = { value: this.employees[this.curEmploee], done: false };
    //     this.curEmploee++;
    //     return returnValue;
    // },
    [Symbol.iterator]: function* employeeGenerator() {
        let currentEmployee = 0;
        while (currentEmployee < this.employees.length) {
            yield this.employees[currentEmployee];
            currentEmployee++;
        }
    }
};
// company.next();//?
// company.next();//?
// company.next();//?
// company.next();//?
// company.next();//?
// let employee = company.next();
// while (!employee.done) {
//   console.log([employee.value])
//   employee = company.next();
// }
for (const employee of company) {
    console.log(`${employee} 414`);
}
// const it = company.getEmp();//?
// it.next()//?
// it.next()//?
// it.next()//?
// it.next()//?
// it.next()//?
[...company]; /*?*/
