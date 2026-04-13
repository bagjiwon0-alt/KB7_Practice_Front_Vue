<template>
  <div>
    <h2>콘솔 확인하기 async-await</h2>
  </div>
</template>

<script setup>
import axios from 'axios';
// 에러처리예제
const requestAPI = () => {
  const url = '/api/todos2';
  axios
    .get(url)
    .then((response) => {
      console.log('응답 객체: ', response);
    })
    .catch((e) => {
      console.log('에러catch');
      if (e instanceof Error)
        console.log(e.message); // 에러내용
      // 객체 instanceof 타입 : 객체가 특정 타입으로 만들어졌는지 확인하는 연산자
      // 맞으면 true 아니면 false
      else console.log(e);
    });
};

requestAPI(); //함수호출
</script>
