<template>
  <li
    class="list-group-item"
    :class="{ 'list-group-item-success': only.completed }"
  >
    <input
      type="checkbox"
      class="pointer me-3"
      @click="$emit('check-box', only.id)"
      :checked="only.completed"
    />
    <span class="pointer" :class="{ 'todo-done': only.completed }">
      {{ only.todo }}{{ only.completed ? '(완료)' : ' ' }}
    </span>
    <span
      class="float-end badge bg-danger pointer me-2"
      @click="$emit('delete-todo', only.id)"
      >삭제</span
    >
    <span class="float-end badge bg-primary">{{ only.date }}</span>
  </li>
</template>

<script setup>
const props = defineProps({
  haveList: { type: Array, required: true },
  only: { type: Object, required: true },
});
const emit = defineEmits(['check-box', 'delete-todo']);
</script>
