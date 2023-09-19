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

const company = {
  curEmploee: 0,
  employees: ['bob', 'kim', 'joe'],
  next() {
    if (this.curEmploee >= this.employees.length) {
      return { value: this.curEmploee, done: true };
    }

    const returnValue = { value: this.employees[this.curEmploee], done: false };
    this.curEmploee++;
    return returnValue;
  },
};

let temp1 = 'temp1';

export { temp1, person };
