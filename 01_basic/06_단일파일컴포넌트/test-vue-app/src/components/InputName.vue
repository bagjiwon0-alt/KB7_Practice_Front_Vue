<!-- 자식 -> 부모 이벤트 발신 -->
<!-- 
  사용자 정의 이벤트를 이용한 정보 전달

  - 이벤트(Events) : 자식 컴포넌트에서 부모 컴포넌트로 정보 전달

  - 이벤트 발신(emit, 방출하다) : 자식 컴포넌트에서 부모 컴포넌트로 이벤트 방출
    this.$emit('event-name', eventArgs1, eventArgs2, …)


  - 이벤트 수신(on) : 부모 컴포넌트에서 자식 컴포넌트로 이벤트 수신
  <child-component @event-name="handlerMethod" />
    methods: {
    handlerMethod(eventArgs1, eventArgs2, …) {
    // 전달받은 아규먼트로 처리할 코드 작성
    }
  }
-->
<template>
  <div>
    <!-- v-model을 사용하여 입력값을 name변수에 양방향 바인딩 -->
    이름: <input type="text" v-model="name" />

    <!-- $emit 메소드를 사용하여 부모 컴포넌트로 이벤트 발신
    $emit은 직계 부모 컴포넌트에게만 이벤트 발신 가능! 
    -->

    <!-- 버튼 클릭시 nameChanged 이벤트를 발신(방출)하고 
    객체(name이라는 데이터가 담긴)를 같이 전달 
    -->
    <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
  </div>
</template>

<script>
export default {
  name: 'InputName', //컴포넌트 이름

  data() {
    return {
      name: '', // 사용자가 입력한 이름을 저장할 변수
    };
  },
};
</script>
