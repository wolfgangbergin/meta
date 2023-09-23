'use strict';

({
  showValueOnSelection: true,
});

const kimFunc = (param1: boolean | string): string | boolean => {
  return param1 || 'banana'
};

kimFunc(true); /*?*/
kimFunc(false); /*?*/
// kimFunc('banana'); /*?*/
// kimFunc('height'); /*?*/
// kimFunc('length'); /*?*/