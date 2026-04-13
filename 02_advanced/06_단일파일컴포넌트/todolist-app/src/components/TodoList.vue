<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem
          v-for="todo in todoList"
          :key="todo.id"
          :todoList="todo"
          @done-todo="$emit('donetodo', todoList)"
          @delete-todo="$emit('delete-todo', $event)"
          @checkbox-completed="$emit('toggle-completed', $event)"
        />
        <!-- 이벤트방출시 전달되는 데이터는 $event로 수신 가능 -->
      </ul>
    </div>
  </div>
</template>
<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: { TodoListItem },
  props: { todoList: { type: Array, required: true } },

  data() {
    return {};
  },
};
</script>
