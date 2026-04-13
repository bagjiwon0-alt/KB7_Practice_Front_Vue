<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default panel-borderless">
      <div class="card-body">
        <InputTodo @input-todo="inputTodo" />
        <NumTodo :todoList="todoList" />
        <TodoList
          :todoList="todoList"
          @check-box="checkBox"
          @delete-todo="deleteTodo"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';
import NumTodo from './components/NumTodo.vue';
import { ref, reactive } from 'vue';

let ts = ref(new Date().getTime());

const todoList = reactive([
  { id: ts.value, todo: '자전거 타기', completed: false },
  { id: ts.value + 1, todo: '딸과 공원 산책', completed: true },
  { id: ts.value + 2, todo: '일요일 애견 카페', completed: false },
  { id: ts.value + 3, todo: 'Vue 원고 집필', completed: false },
]);

const checkBox = (todolist) => {
  let item = todoList.find((todo) => todolist === todo.id);
  if (item) {
    item.completed = !item.completed;
  }
};

const deleteTodo = (id) => {
  let index = todoList.findIndex((todo) => id === todo.id);
  if (index !== -1) {
    todoList.splice(index, 1);
  }
  console.log(index);
};

const inputTodo = (plustodo, selectedDate) => {
  // console.log(plustodo);
  // console.log(selectedDate);
  const newobj = {
    id: Date.now(),
    todo: plustodo,
    completed: false,
    date: selectedDate,
  };
  todoList.push(newobj);
  // console.log(todoList);
};
</script>
