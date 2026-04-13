<template>
  <div>
    <h2>다른 컴포넌트</h2>

    <div>
      X: <input type="text" v-model.number="x" /><br />
      Y: <input type="text" v-model.number="y" /><br />
      <button @click="calculateSum(x, y, 1)">X + Y</button>
      <p>X + Y = {{ sum1 }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCalc } from './Composition.vue';

const { x, y, sum1, calculateSum } = useCalc();
// useCalc()시 return된 객체에서 필요한 속성만 가져옴.
//   return { x, y, sum1, a, b, sum2, calculateSum };
// 위에 7개 중에서 순서 상관없이 뽑은것만 갖다줌.
</script>

<!-- ----------------------------------------------- -->

<!-- <script>
import { useCalc } from './Composition.vue';
export default {
  setup() {
    const { x, y, sum1, calculateSum } = useCalc();

    return { x, y, sum1, calculateSum };
  },
};
</script> -->
