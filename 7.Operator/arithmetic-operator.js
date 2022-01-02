/* 산술 연산자 */
// binary arithmetic operator
console.log(5 + 2);             // 7
console.log(5 - 2);             // 3
console.log(5 * 2);             // 10
console.log(5 / 2);             // 2.5
console.log(5 % 2 + "\n");      // 1





// unary arithmetic operator
var x = 1;
// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++;    // x = x + 1;
console.log(x);                 // 2

x--;    // x = x - 1;
console.log(x + "\n");          // 1



var x = 5, result;
// 선할당 후증가 (postfix increment operator)
result = x++;
console.log(result, x);         // 5 6

// 선증가 후할당 (prefix increment operator)
result = ++x;
console.log(result, x);         // 7 7

// 선할당 후감소 (postfix decrement operator)
result = x--;
console.log(result, x);         // 7 6

// 선감소 후할당 (prefix decrement operator)
console.log(result, x + "\n");  // 5 5



var x = '1';
// 문자열을 숫자로 타입 변환한다.
console.log(+x);                // 1
// 부수 효과는 없다.
console.log(x);                 // "1"

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x);                // 1
// 부수 효과는 없다.
console.log(x);                 // true

x = false;
console.log(+x);                // 0
console.log(x);                 // false

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = 'Hello';
console.log(+x);                // NaN
// 부수 효과는 없다.
console.log(x + "\n");          // "Hello"





// 문자열 연결 연산자
console.log('1' + 2);           // '12'
console.log(1 + '2');           // '12'

console.log(1 + true);          // 2
console.log(1 + false);         // 1

console.log(1 + null);          // 1

console.log(+undefined);        // NaN
console.log(1 + undefined);     // NaN
