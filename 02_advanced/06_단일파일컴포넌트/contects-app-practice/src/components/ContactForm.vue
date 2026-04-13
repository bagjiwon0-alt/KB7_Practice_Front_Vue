<template>
  <div class="input-form card card-body mt-3">
    <div class="row g-3">
      <div class="col-md-2">
        <input
          type="text"
          class="form-control"
          placeholder="이름"
          v-model="name"
          @input.stop="$emit('name-str', $event.target.value)"
        />
      </div>
      <div class="col-md-2">
        <select
          class="form-select"
          v-model="gender"
          @click.stop="$emit('gender-str', $event.target.value)"
        >
          <option value="">성별</option>
          <option value="남">남</option>
          <option value="여">여</option>
        </select>
      </div>
      <div class="col-md-2">
        <input
          type="number"
          class="form-control"
          placeholder="나이"
          v-model="age"
          @change="$emit('age', $event.target.value)"
        />
      </div>
      <div class="col-md-3">
        <input
          type="email"
          class="form-control"
          placeholder="이메일"
          v-model="email"
          @input.stop="$emit('email', $event.target.value)"
        />
      </div>
      <div class="col-md-2">
        <input
          type="text"
          class="form-control"
          placeholder="github ID"
          v-model="github"
          @input.stop="$emit('github-id', $event.target.value)"
        />
      </div>
      <div class="col-md-1">
        <button class="btn btn-primary w-100" @click="eventHandler">
          추가
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  props: { newContact: { type: Object, required: true } },

  data() {
    return { name: '', email: '', gender: '', age: '', github: '' };
  },

  methods: {
    // 이름이 입력 안된 경우 '이름을 입력하세요' 알림창
    // 이메일이 입력 안된 경우 '이메일을 입력하세요' 알림창
    // 둘 다 입력이 된 경우 연락처 추가
    eventHandler() {
      if (this.newContact.name.length == 0) {
        alert('이름을 입력하세요');
        return;
      }
      if (this.newContact.email.length <= 2) {
        alert('이메일을 입력하세요');
        return;
      }
      this.$emit('plus-list', this.newContact);
      this.name = '';
      this.email = '';
      this.gender = '';
      this.age = '';
      this.github = '';
    },
  },
};
</script>
