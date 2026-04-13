<!-- props속성 사용 (객체 전달)
  - props목적 : 자식 컴포넌트가 필요한 데이터를 전달 받아 UI 렌더링 하는것
-->

<template>
  <li><input type="checkbox" />{{ idol2.name }}</li>
</template>

<script>
export default {
  name: 'CheckboxItem', //컴포넌트 이름
  props: ['idol2'],
  // props로 전달 받은 idol 객체
};
</script>
