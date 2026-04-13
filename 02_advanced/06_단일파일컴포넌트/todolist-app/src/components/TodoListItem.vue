<template>
  <div>
    <li
      class="list-group-item"
      :class="{ 'list-group-item-success': todoList.completed }"
      @click="$emit('done-todo', todoList)"
    >
      <!-- :class="{클래스명 : 조건}" : 조건이 true면 클래스 추가 
       저거 리스트르룹아이템석세스 바탕색 초록색으로 바뀌는거임-->
      <input
        type="checkbox"
        class="pointer me-3"
        @click.stop="$emit('checkbox-completed', todoList.id)"
        :checked="todoList.completed"
      />
      <!-- <input
        type="checkbox"
        class="pointer me-3"
        v-model="todoList.completed"
      /> -->

      <!-- 객체 prop에 v-model을 쓰면 부모의 데이터도 같이 바뀐다. 
        -> 하지만 props는 읽기 전용이 원칙이라서 권장 X 
        -> 해결: 자식 component에서 $emit으로 부모에게 알려서 바꾸자.
      -->
      <!-- 원하는 조건일때만 추가 하는거 :class="{클래스명: 조건}" 조건이 true면 클래스 추가 -->
      <span class="pointer" :class="{ 'todo-done': todoList.completed }"
        >{{ todoList.todo }}{{ todoList.completed ? '(완료)' : '' }}</span
      >
      <!-- 삼항 연산자: 조건식? true : false -->
      <span
        class="float-end badge bg-secondary pointer"
        @click="$emit('delete-todo', todoList.id)"
        >삭제</span
      >
    </li>
  </div>
</template>
<script>
export default {
  name: 'TodoListItem',
  props: { todoList: { type: Object, required: true } },
  // 객체는 Object

  data() {
    return {};
  },
};
</script>
