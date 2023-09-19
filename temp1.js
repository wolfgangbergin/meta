/////////////////////////////////////////////// Library
const wolfId = Symbol('Symbol.wolfId');
const person = {
    id: 'p1',
    [wolfId]: 'p1',
    [Symbol.toStringTag]: 'Person',
};
///////////////////////////////////////////////app
person[wolfId] = 'wolf';
person[Symbol.toStringTag] = 'kim';
person;
const company = {
    employees: ['bob', 'kim', 'joe'],
    next() {
        return { vale: this.employees[0], done: false };
    }
};
let temp1 = 'temp1';
export { temp1, person };
