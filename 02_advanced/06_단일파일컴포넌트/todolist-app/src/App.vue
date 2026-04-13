<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @addTodo="addTodo1" />
        <TodoList
          :todoList="todoList"
          @donetodo="toggleCompleted"
          @delete-todo="deleteTodo($event)"
          @toggle-completed="checkedBox"
        />
        <!-- @delete-todo: 자식으로부터 delete-todo라는 이벤트가 감지되면 
         (="delete-todo"): 해당 메소드를 호출한다 
         -->
        <!-- deleteTodo == deleteTodo($event) 
         미작성 시 Vue가 내부적으로 추가 -->
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';
let ts = new Date().getTime();
export default {
  name: 'App',
  components: { InputTodo, TodoList },
  data() {
    return {
      todoList: [
        { id: ts, todo: '자전거 타기', completed: false },
        { id: ts + 1, todo: '딸과 공원 산책', completed: true },
        { id: ts + 2, todo: '일요일 애견 카페', completed: false },
        { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
      ],
      donestyle: 'todo-done',
    };
  },
  methods: {
    /*
     * 할일추가
     * @param todo InputTodo에서 전달된 todo(할일 내용)
     */
    addTodo1(todo) {
      console.log(todo);
      this.todoList.push({
        id: Date.now(),
        todo: todo,
        completed: false,
      });
    },
    toggleCompleted(todoList) {
      console.log(todoList.completed);
      todoList.completed = !todoList.completed;
    },
    checkedBox(e) {
      console.log(e);
      // 배열.findIndex((item) => 조건): 조건이 true가 되는 첫번째 요소의 index 반환
      // 없는 경우 -1 반환한다.
      // let index = this.todoList.find((item) => item.id == e);
      // console.log(index);
      const idnum = this.todoList.findIndex((todo) => e === todo.id);
      // == (동등비교) : 값만 비교
      // === (동일비교) : 값 + 타입까지 비교
      // console.log(idnum);

      // console.log(this.todoList[idnum]);
      // console.log(this.todoList[idnum].completed);
      // console.log(!this.todoList[idnum].completed);
      // !true/false : true -> false 혹은 false -> true로 변경

      console.log(this.todoList[idnum].completed);
      this.todoList[idnum].completed = !this.todoList[idnum].completed;
      console.log(this.todoList[idnum].completed);
      // this.todoList[index].completed
      // idnum.completed = !idnum.completed;
      // const idnum = this.todoList.find((todo) => e === todo.id);
      // console.log(idnum);
      // idnum.completed = !idnum.completed;
    },
    // 할일 삭제
    deleteTodo(e) {
      // id가 일치하는 요소의 index 변수에 담기
      let idindex = this.todoList.findIndex((todo) => e === todo.id);
      // console.log(idindex);
      // splice(시작index, 삭제개수)
      if (idindex !== -1) {
        this.todoList.splice(idindex, 1);
      }
    },
  },
};
</script>
