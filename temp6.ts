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

Reflect.setPrototypeOf(wolf515, {
  wolfToString() {
    // const newObj: Kim = wolf515;
    // return newObj.title;
    return (this as Kim).title;
  },
});

const courseHandler = {
  get(obj: any, propName: any) {
    

    if (propName === 'length') {
      return 'not allowed no length = undefind!!!'
    }
    return obj[propName] ||  new Error('NOT FOUND');
  },
 
};

const pCourse = new Proxy(wolf515, courseHandler);
pCourse.age = 313/*?*/


pCourse.title/*?*/
pCourse.age/*?*/

pCourse/*?*/

export { pCourse };