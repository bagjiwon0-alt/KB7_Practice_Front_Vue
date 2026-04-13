<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input type="text" class="form-control" v-model="plustodo" />
        <input type="date" v-model="selectedDate" :min="today" />
        <button class="btn btn-primary" type="button" @click="plusTodo">
          추가
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const plustodo = ref('');
const today = ref(new Date().toLocaleDateString('en-CA'));
const selectedDate = ref('');

const emit = defineEmits(['input-todo']);
const plusTodo = () => {
  if (plustodo.value.length <= 2) {
    alert('할일은 3글자 이상 입력하세요');
    return;
  }

  // if (selectedDate.value == '') {
  //   alert('종료 날짜를 입력하세요');
  //   return;
  // }

  // console.log(plustodo.value);
  // console.log(selectedDate.value);
  // console.log(today.value);

  emit('input-todo', plustodo.value, selectedDate.value);
  plustodo.value = '';
  selectedDate.value = '';
};
</script>
