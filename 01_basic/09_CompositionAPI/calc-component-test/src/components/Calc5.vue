<template>
  <div>
    x : <input type="text" v-model.number="x" />
    <br />
    <!-- 결과 : {{ result }} -->
  </div>
</template>
<script>
import { ref, watch } from 'vue';
export default {
  name: 'Calc5',
  setup() {
    const x = ref(0); // 0으로 초기화

    /* watch()
     - 반응형 데이터의 변화를 감지하고 콜백함수를 실행
     - 첫 번째 인자: 감시 대상(ref, reactive 또는 getter함수 등)
     - 두 번째 인자: 콜백 함수 (현재 값, 이전 값)
     - 세 번째 인자: 옵션 객체

     - immediate: true
     -> 최초 실행 시에도 콜백 함수 실행

     - deep : true
     -> 객체/배열 내부 값 변화까지 감지
     */
    const result = watch(
      x, // 첫 번째인자
      (current, old) => {
        console.log('이후값' + current);
        console.log('초기값' + old);
      }, // 두 번째인자
      { immediate: true },
    ); // 0으로 초기화
    // 필요한 경우 코드 추가
    return { x, result };
  },
};
</script>
