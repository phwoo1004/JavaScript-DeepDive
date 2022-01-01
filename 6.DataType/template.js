/* 템플릿 리터럴 */
var template = `Template literal`;
console.log(template);  // Template literal

/*
// 일반 문자열 내에서는 줄바꿈(개행)이 허용되지 않는다.
var str = 'Hello
world.';
// SyntaxError: Invalid or unexpected token
*/

var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);

var template = `<ul>
        <li><a href="#">Home</a></li>
</ul>`;
console.log(template);

var first = 'Ung-mo';
var last = 'Lee';
// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');  // My name is Ung-mo Lee.

var first = 'Ung-mo';
var last = 'Lee';
// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`);            // My name is Ung-mo Lee.
