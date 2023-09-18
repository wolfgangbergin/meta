globalThis.l = function (...x) {
    console.log(...x);
};
globalThis.kim = {
    testLog: function (...x) {
        l(...x);
    }
};
const wolfgang = 'wolfgang';
wolfgang;
export { wolfgang };
