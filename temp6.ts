'use strict';

({
  showValueOnSelection: true,
});
interface Kim {
  [key: string]: any;
}

let wolf515: Kim = {
  title: 'puckup Chevy Silverado pick up truck',
  age: 19999,
};

// Reflect.setPrototypeOf(wolf515, {
//   wolfToString() {
//     // const newObj: Kim = wolf515;
//     // return newObj.title;
//     return (this as Kim).title;
//   },
// });

const courseHandler = {
  get(obj: any, propName: any) {
    if (propName === 'length') {
      return 'not allowed no length = undefind!!!';
    }
    return obj[propName] || new Error('NOT FOUND');
  },

  set(obj: any, propName: any, newValue: any): any {
    propName === 'title'
      ? console.log(` not allowed to change title `)
      : (obj[propName] = newValue);

    return true;
  },
};

const pCourse = new Proxy(wolf515, courseHandler);

pCourse.age = 313; /*?*/

pCourse.rating = 5; /*?*/

pCourse.title = 'new title'; /*?*/

wolf515; /*?*/
pCourse; /*?*/

export { pCourse };
