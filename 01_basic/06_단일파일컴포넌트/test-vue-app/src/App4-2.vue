<template>
  <h1>이벤트 유효성 검증</h1>

  <InputName @nameChanged="nameChangeHandler" />
  <br />
  <h3>App 데이터: {{ parentName }}</h3>
</template>

<script>
import InputName from './components/InputName2.vue';
export default {
  components: { InputName },
  name: 'App4-2',
  data() {
    return {
      parentName: '',
    };
  },
  methods: {
    nameChangeHandler(e) {
      this.parentName = e.name;
    },
  },
};
</script>
