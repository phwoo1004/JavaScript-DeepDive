/* 지수 연산자 */
console.log(2 ** 2);                        // 4
console.log(2 ** 2.5);                      // 5.65685424949238
console.log(2 ** 0);                        // 1
console.log(2 ** -2);                       // 0.25
console.log(" ");

// 지수 연산자가 도입되기 이전에는 Math.pow 메서드를 사용했음
Math.pow(2, 2);
Math.pow(2, 2.5);
Math.pow(2, 0);
Math.pow(2, -2);

// 지수 연산자는 Math.pow 메서드보다 가독성이 좋다
console.log(2 ** 2 ** 2);                   // 16
console.log(Math.pow(Math.pow(2, 2), 2));   // 16
console.log(" ")

// 음수를 거듭제곱의 밑으로 사용하려면 괄호로 묶어야 한다.
console.log((-5) ** 2);                     // 25
console.log(" ")

// 지수 연산자는 할당 연산자와 함께 사용할 수 있음
var num = 5;
console.log(num **= 2);                     // 25
console.log(" ");

// 지수 연산자는 이항 연산자 중에서 우선순위가 가장 높다
console.log(2 * 5 ** 2);                    // 50
