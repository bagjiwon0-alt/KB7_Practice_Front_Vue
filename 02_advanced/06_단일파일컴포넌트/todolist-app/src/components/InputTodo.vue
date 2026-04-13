<template>
  <div>
    <input
      type="text"
      class="form-control"
      placeholder="할일을 여기에 입력!"
      v-model="todo"
      @keyup.enter="addTodoHandler"
    />
    <button
      class="btn btn-primary input-group-addon"
      type="button"
      @click="addTodoHandler"
    >
      추가
    </button>
  </div>
</template>
<script>
export default {
  name: 'InputTodo',
  data() {
    return {
      todo: '',
    };
  },
  emits: ['add-todo'],
  methods: {
    addTodoHandler() {
      // 할일이 3글자 이상인 경우에만
      if (this.todo.length >= 3) {
        // 부모 컴포넌트에 이벤트 전달(방출)
        this.$emit('addTodo', this.todo);
        this.todo = ''; //input 초기화
        return; // 메소드 종료 == 밑에 코드 수행X
      }

      alert('할일은 3글자 이상 입력해주세요.');
    },
  },
  emits: ['addTodo'],
  // 이벤트 방출 검사
  //  -> 부모 컴포넌트로 전달되는 이벤트가 addTodo가 맞는지 검사
};
</script>
