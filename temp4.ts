

({
  showValueOnSelection: true,
});

interface Banana {
   [key: string]: string | number | string[]  | Function | any;
  
  // 1: string;
  // 2: string;
  // 3: string;
  // 4: string;
  // employees: string[];
  // [Symbol.iterator]: () => any;

}
type Banana2 = string[]

let array5: Banana2 = ['bob', 'kim', 'joe', 'mickey', 'jojo'];


let employees313 = ['bob313', 'kim313', 'joe313', 'wolf313'];

const company2: Banana = {
 
    [`0`]: 'zero',
    [1]: 'one',
    [2]: 'two',
    [3]: 'three',
    [4]: 'four',
    5: 5,


  
  employees:  array5,

  [Symbol.iterator]: function* employeeGenerator(): any {
    let currentEmployee: number = 0;
    while (currentEmployee < this.employees.length) {
       
        let temp = this[currentEmployee];
      yield temp;
      currentEmployee++;
    }
  },
};




company2