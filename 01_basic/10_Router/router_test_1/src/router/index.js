// Vue Router 라이브러리에서 필요한 함수들을 가져옴
// createRouter : Vue 라우터인스턴스를 생성하는 함수
// createWebHistory : HTML5 History API를 사용하여
//                    URL 경로를 관리하는 함수

import { createRouter, createWebHistory } from 'vue-router';

// 페이지 컴포넌트 가져오기
// @ : src 폴더를 의미하는 별칠(alias)
// -> vite.config.js에 작성됨(리드미 아래에 있어)
import Home from '@/pages/Home.vue';
import Members from '@/pages/Members.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import MembersLeft from '@/components/members/MembersLeft.vue';
import MembersFooter from '@/components/members/MembersFooter.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes: URL 주소와 컴포넌트를 연결해놓은 설정목록
  routes: [
    {
      path: '/members', //해당 url일 때
      components: {
        default: Members,
        left: MembersLeft,
        footer: MembersFooter,
      }, // 보여줄 컴포넌트
      name: 'members', //라우터를 이름으로 부르기 위한 옵션
    },

    // 동적 라우트 패턴
    // ->  URL에 따라 값이 바뀌는 라우트
    // (\\d+) : 숫자만 허용(정규표현식)
    {
      path: '/members/:id(\\d+)',
      component: MemberInfo,
      name: 'members/id',
    },

    {
      path: '/',
      component: Home, // import 한 Home 컴포넌트 보여주겠다.
      name: 'home',
    },
  ],
});

export default router;
