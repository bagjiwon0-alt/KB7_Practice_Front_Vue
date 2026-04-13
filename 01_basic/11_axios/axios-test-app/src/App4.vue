<template>
  <div>
    <h2>콘솔 확인하기 async-await</h2>
  </div>
</template>

<script setup>
import axios from 'axios';
const BASEURL = '/api/todos';

// t수정하기
const requestAPI = async () => {
  let data = { todo: '복습하기', desc: '이해가될때까지' };

  // POST 요청: 데이터 추가
  let resp = await axios.post(BASEURL, data);
  console.log(resp.data);
};

requestAPI(); //함수호출
</script>
