<template>
  <div>
    <h2>콘솔 확인하기 async-await</h2>
  </div>
</template>

<script setup>
import axios from 'axios';
const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';

// 4건의 목록을 조회한 후 첫번째, 두번째 할 일 순차적으로 조회
const requestAPI = async () => {
  let todoList; // todo목록을 담을 변수

  // 1. 전체목록 조회
  // await : Promise가 끝날 때 까지 기다림
  let response = await axios.get(listUrl);
  //   console.log(response);
  todoList = response.data;
  console.log('## TodoList ', todoList);

  //   2. 첫번째 Todo 조회
  response = await axios.get(todoUrlPrefix + todoList[0].id);
  //   console.log(response);
  // Promise(Pending) : 아직 결과가 안나온 상태(=진행중) (await 안붙였을때 나왔음.)
  // -> await로 기다려야 한다.
  console.log('## 첫번째 todo : ', response.data);

  //    3. 두번째 Todo 조회
  response = await axios.get(todoUrlPrefix + todoList[1].id);
  //   console.log(response);
  console.log('## 두번째 todo : ', response.data);
};

// requestAPI(); //함수호출
</script>
