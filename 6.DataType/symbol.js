/* 심벌 타입 */
var key = Symbol('key');
console.log(typeof key);    // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로미터 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]);  // value
