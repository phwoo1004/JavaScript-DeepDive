/* 삼항 조건 연산자 */
var x = 2;
// 2 % 2는 0이고, 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result);                // 짝수

var x = 2, result;
if (x % 2) result = '홀수';
else       result = '짝수';
console.log(result);                // 짝수

/*
// if...else 문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다.
var x = 10;
var result = if (x % 2) { result = '홀수'; } else { result = '짝수'; };
// SyntaxError: Unexpected token if
*/

// 삼항 조건 연산자 표현식은 표현식인 문이다. 따라서 값처럼 사용할 수 있다.
var x = 10;
var result = x % 2 ? '홀수' : '짝수';
console.log(result);                // 짝수
