<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListDate
          :haveList="haveList"
          v-for="date in haveList"
          :key="date.id"
          :date="date"
          @check-box="$emit('check-box', $event)"
          @delete-todo="$emit('delete-todo', $event)"
        />
        <h5>기한없음</h5>
        <!-- 여기 수정: 기한 없는 것들만 모으깅ㄴ-->
        <TodoListItem
          @check-box="$emit('check-box', $event)"
          @delete-todo="$emit('delete-todo', $event)"
          :noDateList="noDateList"
          v-for="todo in noDateList"
          :key="todo.id"
          :todo="todo"
        />
      </ul>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed } from 'vue';

import TodoListDate from './TodoListDate.vue';
import TodoListItem from './TodoListItem.vue';

const props = defineProps(
  { todoList: { type: Array, required: true } },
  // { selectedDate: { type: String, required: false } },
);

const haveList = computed(() => {
  const havelist = props.todoList.filter((todo) => todo.date);
  return havelist;
});

const noDateList = computed(() => {
  const nodatelist = props.todoList.filter((todo) => !todo.date);
  return nodatelist;
});
const emit = defineEmits(['check-box', 'delete-todo']);
</script>
