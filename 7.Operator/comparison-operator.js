/* 비교 연산자 */
// 동등/일치 비교 연산자
console.log(5 == 5);                    // true
// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
console.log(5 == '5');                  // true
console.log('0' == '');                 // false
console.log(0 == '');                   // true (?)
console.log(0 == '0');                  // true
console.log(false == 'false');          // false
console.log(false == '0');              // true (?)
console.log(false == null);             // false
console.log(false == undefined + "\n"); // false

// 일치 비교 연산자
console.log(5 === 5);                   // true
// 암묵적 타입 변화를 하지 않고 값을 비교한다. (즉, 값과 타입이 모두 같은 경우에만 true를 반환한다.)
console.log(5 === '5');                 // false
// NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(NaN === NaN);               // false

// isNaN : 숫자가 NaN인지 조사하는 함수
console.log(isNaN(NaN));                // true
console.log(isNaN(10));                 // false
console.log(isNaN(1 + undefined));      // true

// 자바스크립트에는 양의 0과 음의 0이 있음. 이들을 비교하면 true를 반환.
console.log(0 === -0);                  // true
console.log(0 == -0);                   // true

// Object.is 메서드 : 예측 가능한 정확한 비교 결과를 반환. 그 외에는 일치 비교 연산자와 동일하게 동작
Object.is(-0, +0);                      // false
Object.is(NaN, NaN);                    // true

// 부동등 비교 연산자(!=)와 불일치 비교 연산자(!==)는 각각 동등 비교 연산자(==)와 일치 비교 연산자(===)의 반대 개념
// 부동등 비교
console.log(5 != 8);                    // true
console.log(5 != 5);                    // false
console.log(5 != '5');                  // false

// 불일치 비교
console.log(5 !== 8);                   // true
console.log(5 !== 5);                   // false
console.log(5 !== '5');                 // true



/* 대소 관계 비교 연산자 */
console.log(5 < 5);                     // false
console.log(5 > 5);                     // false
console.log(5 >= 5);                    // true
console.log(5 <= 5);                    // true
