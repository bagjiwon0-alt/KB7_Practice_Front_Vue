<template>
  <div id="app" class="container-lg">
    <div class="card card-body bg-light">
      <div class="title">우리반 Contact ❤️</div>
    </div>

    <!-- 연락처 입력 폼 -->
    <ContactForm
      :newContact="newContact"
      @name-str="inputName"
      @gender-str="inputGender"
      @age="inputAge"
      @email="inputEmail"
      @github-id="inputGithub"
      @plus-list="plusList"
    />
    <!--<span>{{ this.contacts }}</span>-->
    <!-- 연락처 목록 -->
    <ContactList :contacts="contacts" @delete-obj="deleteObj" />
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue';
import ContactList from './components/ContactList.vue';
export default {
  name: 'App',
  components: { ContactForm, ContactList },
  data() {
    return {
      newContact: {
        name: '',
        gender: '',
        age: '',
        email: '',
        github: '',
      },
      contacts: [
        {
          id: 1,
          name: '홍길동',
          gender: '남',
          age: 20,
          email: 'hong@example.com',
          github: 'hongGD',
          isEditing: false,
        },
        {
          id: 2,
          name: '짱구',
          gender: '남',
          age: 7,
          email: 'janggu@example.com',
          github: 'janggu',
          isEditing: false,
        },
        {
          id: 3,
          name: '유리',
          gender: '여',
          age: 7,
          email: 'yuri@example.com',
          github: 'yuri',
          isEditing: false,
        },
      ],
    };
  },
  methods: {
    /* contact 추가 */
    inputName(e) {
      this.newContact.name = e;
    },
    inputGender(e) {
      this.newContact.gender = e;
    },
    inputAge(e) {
      this.newContact.age = e;
    },
    inputEmail(e) {
      this.newContact.email = e;
    },
    inputGithub(e) {
      this.newContact.github = e;
    },

    // 추가 버튼 클릭
    plusList(e) {
      this.contacts.push({
        id: Date.now(),
        name: this.newContact.name,
        gender: this.newContact.gender,
        age: this.newContact.age,
        email: this.newContact.email,
        github: this.newContact.github,
        isEditing: false,
      });
      this.newContact.name = '';
    },
    /* contact 삭제 */
    deleteObj(e) {
      const objt = this.contacts.findIndex((index) => index.id === e);
      this.contacts.splice(objt, 1);
    },
  },
};
</script>
