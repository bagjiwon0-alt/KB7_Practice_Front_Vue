<template>
  <div>
    <h3>Options API 적용</h3>

    <div>
      이름:
      <input
        type="text"
        placeholder="입력 시 대문자로 변환"
        :value="name"
        @input="changeName($event.target.value)"
      />
      <!-- $evnet.target : 이벤트가 발생한 요소 -->
    </div>
    <hr />

    <h5>계산하기</h5>
    <div>
      X: <input type="text" v-model.number="x" /><br />
      Y: <input type="text" v-model.number="y" /><br />
      <button @click="calculateSum(x, y, 1)">X + Y</button>
      <p>X + Y = {{ sum }}</p>
    </div>

    <h5>함수 하나로 계산하기</h5>
    <div>
      A: <input type="text" v-model.number="a" /><br />
      B: <input type="text" v-model.number="b" /><br />
      <button @click="calculateSum(a, b, 2)">A + B</button>
      <p>A + B = {{ sum1 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Options',
  data() {
    return {
      name: '',
      x: 3,
      y: 5,
      sum: '',
      a: 4,
      b: 5,
      sum1: '',
    };
  },
  methods: {
    changeName(inputName) {
      //   console.log(inputName);
      //   console.log(this.name);

      //   문자열.toUpperCase(): 대문자로 변환
      //   console.log(inputName.toUpperCase());

      this.name = inputName.toUpperCase();
    },
    calculateSum(num1, num2, type) {
      console.log(type);

      if (type === 1) {
        //   x+y버튼 클릭시
        this.sum = num1 + num2;
      } else {
        //   a+b버튼 클릭시
        this.sum1 = num1 + num2;
      }
    },

    // calculateSum1(a, b) {
    //   console.log(a, b);
    //   this.sum1 = a + b;
    //   //   this.plus = this.x + this.y;
    // },
  },
};
</script>
