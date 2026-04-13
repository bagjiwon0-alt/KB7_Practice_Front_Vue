<template>
  <div>
    <h2>콘솔 확인하기 async-await</h2>
  </div>
</template>

<script setup>
/* try - catch - finally
 * try{ } : 예외가 발생할 가능성이 있는 코드
 * catch(e){ }: 예외 발생 시 수행할 코드
 * finally {} : 예외 발생 하든 안하든 마지막에 무.조.건. 수행
 *
 */

import axios from 'axios';
import { TrackOpTypes } from 'vue';
// 에러처리예제
const requestAPI = async () => {
  try {
    // 에러발생 시 즉시 종료 후 catch문으로 이동
    const url = '/api/todos2';
    let response = await axios.get(url);
    console.log('응답객체: ', response);
  } catch (e) {
    console.log('에러발생에만 실행됨');
    if (e instanceof Error)
      console.log(e.message); // 에러내용
    else console.log(e);
  } finally {
    console.log('finally는 무조건 수행~');
  }
};

requestAPI(); //함수호출
</script>
