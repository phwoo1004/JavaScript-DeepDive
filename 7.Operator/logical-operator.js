/* 논리 연산자 */
// 논리합(||) 연산자
console.log(true || true);              // true
console.log(true || false);             // true
console.log(false || true);             // true
console.log(false || false + "\n");     // false

// 논리곱(&&) 연산자
console.log(true && true);              // true
console.log(true && false);             // false
console.log(false && true);             // false
console.log(false && false + "\n");     // false

// 논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다.
// (언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.)
console.log('Cats' && 'Dog' + "\n");    // 'Dog'

// 논리 부정(!) 연산자 : 언제나 불리언 값을 반환함. 단, 피연산자가 반드시 불리언 값일 필요는 없음.
console.log(!true);                     // false
console.log(!false);                    // true
// 암묵적 타입 변환
console.log(!0);                        // true
console.log(!'Hello')                   // false
