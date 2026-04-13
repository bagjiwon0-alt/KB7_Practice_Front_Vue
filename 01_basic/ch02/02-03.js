/* ### const 
- 상수를 선언하는 키워드
- SCOPE(범위)는 let 과 동일(블록레벨)
- 상수니까 값을 변경할 수 없으나, 
    객체나 배열의 경우 내부 속성은 변경 가능
*/

const p1 = { name: 'john', age: 20 };
p1.age = 22;
// 객체의 내부 속성은 변경 가능

console.log(p1);
// p1 = { name: 'lee', age: 25 };
// 윗 줄에  p1(객체 자체)을 다시 정의하려하면 오류 남.

// Assignment to constant variable.
// 상수에 할당 할 수 없다.
