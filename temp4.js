"use strict";
({
    showValueOnSelection: true,
});
let array5 = ['bob', 'kim', 'joe', 'mickey', 'jojo'];
let employees313 = ['bob313', 'kim313', 'joe313', 'wolf313'];
const company2 = {
    [`0`]: 'zero',
    [1]: 'one',
    [2]: 'two',
    [3]: 'three',
    [4]: 'four',
    5: 5,
    employees: array5,
    [Symbol.iterator]: function* employeeGenerator() {
        let currentEmployee = 0;
        while (currentEmployee < this.employees.length) {
            let temp = this[currentEmployee];
            yield temp;
            currentEmployee++;
        }
    },
};
company2;
