var person, $elem, _name, first_name, val1;

// 알파벳 외의 유니코드 문자로 명명된 식별자를 사용하는 것은 바람직하지 않다.
var 이름, 李凜;

// 다음 식별자는 명명 규칙에 위배되므로 변수 이름으로 사용할 수 없다.
/*
var first-name; // SyntaxError: Unexpected token '-'
var 1st;        // SyntaxError: Invalid or unexpected token
var this;       // SyntaxError: Unexpected token 'this'
*/

// 자바스크립트는 대소문자를 구별하므로 다음 변수는 각각 별개의 변수다.
var firstname;
var firstName;
var FIRSTNAME;

/* 
변수 이름은 변수의 존재 목적을 쉽게 이해할 수 있도록 의미를 명확히 표현해야 함
(변수 선언에 별도의 주석이 필요하다면 변수의 존재 목적을 명확히 드러내지 못하는 것)
*/
var x = 3;          // X : x 변수가 의미하는 바를 알 수 없다.
var score = 100;    // O : score 변수는 점수를 의미한다.
var elapsedTimeInDays;
