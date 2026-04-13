/*  ###let

- 블록 단위로 유효 범위가 지정되는 변수
- 중복 선언 불가
- let 없이 msg = 'GLOBAL' 만 하면 var와 똑같이 됨.(전역변수)
- 재정의 불가
*/

let msg = 'GLOBAL';
function outer() {
  let msg = 'OUTER';
  console.log(msg);
  if (true) {
    // 조건이 true면 무조건 실행함.
    let msg = 'BLOCK';
    console.log(msg);
  }
}
outer();

console.log(msg);
