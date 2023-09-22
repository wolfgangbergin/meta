'use strict';
({
    showValueOnSelection: true,
});
let wolf515 = {
    title: 'puckup Chevy Silverado pick up truck',
    age: 19999,
};
Reflect.setPrototypeOf(wolf515, {
    wolfToString() {
        // const newObj: Kim = wolf515;
        // return newObj.title;
        return this.title;
    },
});
const courseHandler = {
    get(obj, propName) {
        if (propName === 'length') {
            return 'not allowed no length = undefind!!!';
        }
        return obj[propName] || new Error('NOT FOUND');
    },
};
const pCourse = new Proxy(wolf515, courseHandler);
pCourse.age = 313; /*?*/
pCourse.title; /*?*/
pCourse.age; /*?*/
pCourse; /*?*/
export { pCourse };
