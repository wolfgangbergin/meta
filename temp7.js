'use strict';
({
    showValueOnSelection: true,
});
const wolfFunc = (param1) => {
    return param1 === 'length' ? 'LENGTH' : param1 === 'height' ? 'HEIGHT' : param1 === 'banana' ? 'BANANA' : param1 ? 'YES' : 'NO';
};
wolfFunc(true); /*?*/
wolfFunc(false); /*?*/
wolfFunc('banana'); /*?*/
wolfFunc('height'); /*?*/
wolfFunc('length'); /*?*/
