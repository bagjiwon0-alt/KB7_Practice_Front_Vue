<template>
  <div class="row">
    <div class="col p-3">
      <router-link class="btn btn-primary" to="/todos/add">
        할일 추가
      </router-link>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!-- <TodoItem/> -->
        <TodoItem
          v-for="todoItem in todoList"
          :key="todoItem.id"
          :todo-item="todoItem"
        />
      </ul>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue';
import TodoItem from '@/components/TodoItem.vue';

const todoList = inject('todoList');
// TodoItem 컴포넌트 임포트

// 부모 todoList를 얻어와 todoList 변수에 담기
</script>
