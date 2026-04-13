<template>
  <div>
    <h2>수입/지출/이체</h2>
    <div>
      <button>수입</button>
      <button>지출</button>
      <button>이체</button>
    </div>
    <div>
      <ul>
        <li>
          날짜:
          <input type="date" v-model="transaction.date" />
        </li>
        <li>
          금액:
          <input type="number" v-model="transaction.amount" />
        </li>
        <li>
          <label for="category">카테고리: </label>
          <select
            name="categories"
            id="category"
            v-model="transaction.category"
          >
            <option value="food">식비</option>
            <option value="transport">교통/차량</option>
            <option value="shopping">쇼핑</option>
          </select>
        </li>
        <li>
          <label for="asset">자산: </label>
          <select name="assets" v-model="transaction.category" id="asset">
            <option value="cash">현금</option>
            <option value="bank">은행</option>
            <option value="card">카드</option>
          </select>
        </li>
        <li>
          내용:
          <input type="text" />
        </li>
      </ul>
    </div>
    <div>
      <button @click="addTransaction">저장</button>
      <button>계속</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
const BASEURL = '/api/transactions/1';

const userid = authStore.user.email;
console.log(userid);

const transaction = reactive({
  id: Date.now(),
  userId: userid,
  date: '',
  type: '',
  category: '',
  amount: 0,
  content: '',
});

const requestAPI = async () => {
  let data = {};

  let response = await axios.post(BASEURL, transaction);

  console.log(response.data);
};

requestAPI();
</script>
