// p1이 참조하는 메모리 주소가 바뀌는 것이므로 에러가 발생한다.

const p1 = { name: 'john', age: 20 };
p1 = { name: 'lee', age: 25 };

console.log(p1);
// 윗 줄에  p1(객체 자체)을 다시 정의하려하면 오류 남.
// 오류내용
// Assignment to constant variable.
// 상수에 할당 할 수 없다.
