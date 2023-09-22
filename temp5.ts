'use strict';

({
  showValueOnSelection: true,
});
interface Kim {
  [key: string]: any;
  
}

let wolf515: Kim = {
  title: 'wolfObject',
};

Reflect.defineProperty(wolf515, 'car', {
  value: 'puckup Chevy Silverado pick up truck',
});
Reflect.defineProperty(wolf515, 'price', {
  value: 19999,
  writable: true,
  enumerable: true,
  configurable: true,
});

Reflect.setPrototypeOf(wolf515, {
    toString() {
      // const newObj: Kim = wolf515;
      // return newObj.title;
       return (wolf515 as Kim).title;
    },
  });

// Reflect.deleteProperty(wolf515, 'price');/*?*/

wolf515

export { wolf515 };
