/* typeof 연산자 */
console.log(typeof '');             // string
console.log(typeof 1);              // number
console.log(typeof NaN);            // number
console.log(typeof true);           // boolean
console.log(typeof undefined);      // undefined
console.log(Symbol());              // symbol
// typeof 연산자로 null 값을 연산해 보면 "null"이 아닌 "object"를 반환함
// 따라서 값이 null 타입인지 확인할 때는 일치 연산자(===)를 사용한다.
console.log(typeof null);           // object
console.log(typeof []);             // object
console.log(typeof {});             // object
console.log(typeof new Date());     // object
console.log(typeof /test/gi);       // object
console.log(typeof function() {});  // function
console.log(" ");

var foo = null;
console.log(typeof foo === null);   // false
console.log(foo === null);          // true
console.log(" ");

// 선언하지 않은 식별자를 typeof 연산자로 연산해 보면 ReferenceError가 발생하지 않고 undefined를 반환한다.
console.log(typeof undeclared);     // undefined
