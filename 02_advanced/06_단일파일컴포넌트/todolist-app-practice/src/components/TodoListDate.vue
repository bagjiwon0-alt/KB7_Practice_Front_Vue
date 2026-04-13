<template>
  <li>
    <h4>{{ date.date }}</h4>
    <div class="row">
      <div class="col">
        <ul class="list-group">
          <TodoItemWithDate
            @check-box="$emit('check-box', $event)"
            @delete-todo="$emit('delete-todo', $event)"
            :haveList="haveList"
            v-for="only in onlyList"
            :key="only.id"
            :only="only"
          />
          <!-- 여기: 같은날짜 선택하면 리스트두개 추가되는거 수정 -->
        </ul>
      </div>
    </div>
  </li>
</template>

<script setup>
import { reactive, computed } from 'vue';
// import TodoListItem from './TodoListItem.vue';
import TodoItemWithDate from './TodoItemWithDate.vue';

const props = defineProps({
  //   todoList: { type: Array, required: true },
  haveList: { type: Array, required: false },
  date: { type: Object, required: false },
});

const onlyList = computed(() => {
  const onlydate = props.haveList.filter(
    (have) => have.date == props.date.date,
  );
  return onlydate;
});

const emit = defineEmits(['check-box', 'delete-todo']);
</script>
