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




Object.defineProperty(wolf515, 'car', {
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
    return wolf515.title;
  },
});

wolf515.toString(); //?

// Reflect.deleteProperty(wolf515, 'price');

// delete wolf515.price;

wolf515 //?


export { wolf515 };
