<template>
  <li
    class="list-group-item"
    :class="{ 'list-group-item-success': todo.completed }"
  >
    <input
      type="checkbox"
      class="pointer me-3"
      @click="$emit('check-box', todo.id)"
      :checked="todo.completed"
    />
    <span class="pointer" :class="{ 'todo-done': todo.completed }">
      {{ todo.todo }}{{ todo.completed ? '(완료)' : ' ' }}
    </span>
    <span
      class="float-end badge bg-danger pointer me-2"
      @click="$emit('delete-todo', todo.id)"
      >삭제</span
    >
    <span class="float-end badge bg-primary">{{ todo.date }}</span>
  </li>
</template>

<script setup>
const props = defineProps({
  todo: { type: Object, required: true },
  noDateList: { type: Array, required: false },
});
const emit = defineEmits(['check-box', 'delete-todo']);
</script>
