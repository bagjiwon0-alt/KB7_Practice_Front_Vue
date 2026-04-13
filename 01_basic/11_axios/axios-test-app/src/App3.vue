<template>
  <div>
    <h2>콘솔 확인하기 async-await</h2>
  </div>
</template>

<script setup>
import axios from 'axios';
const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';

// 전체 목록을 조회한 후 한 건씩 순차적으로 순회하면서 조회하기
const requestAPI = async () => {
  let todoList;

  let response = await axios.get(listUrl);
  todoList = response.data;
  console.log(todoList);

  // 2. 반복문을 이용해서 todo하나씩 조회
  for (let index = 0; index < todoList.length; index++) {
    const response = await axios.get(todoUrlPrefix + todoList[index].id);
    console.log(`## ${index + 1}번 Todo: `, response.data);
  }
};

requestAPI(); //함수호출
</script>

<style scoped></style>
