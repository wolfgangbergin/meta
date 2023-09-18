declare global {
  var l: (...x: any) => void;
  
  var kim: {
   
    testLog: Function;
  };
  }


globalThis.l = function (...x: any) {
  console.log(...x);
};

globalThis.kim = {
   
    testLog: function (...x: any) {
        l(...x);
    }
    };

const wolfgang = 'wolfgang';
wolfgang;


export { wolfgang };
