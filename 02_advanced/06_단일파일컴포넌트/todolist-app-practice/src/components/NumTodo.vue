<template>
  <div class="stats-container">
    <span
      >전체 todo 개수: <b>{{ allCount }}</b></span
    >
    <span
      >완료 todo 개수: <b style="color: green">{{ doneCount }}</b></span
    >
    <span
      >미완료 todo개수: <b style="color: red">{{ unfinished }}</b></span
    >
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
  todoList: { type: Array, required: true },
});
const allCount = computed(() => {
  return props.todoList.length;
});

// 갯수 세어야하니까 반복문 돌리는거 생각해보자
const doneCount = computed(() => {
  const donelist = props.todoList.filter((todo) => todo.completed == true);
  return donelist.length;
});

const unfinished = computed(() => props.todoList.length - doneCount.value);
// const unfinished = computed(() => {
//   const unfnsdList = props.todoList.filter((todo) => todo.completed == false);
//   return unfnsdList.length;
// });
</script>
