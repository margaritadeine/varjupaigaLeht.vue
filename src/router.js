import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Loomad from './views/Loomad.vue';
import Kaotatud from './views/Kaotatud.vue';
import Toetamine from './views/Toetamine.vue';
import Varjupaigast from './views/Varjupaigast.vue';
import Kontakt from './views/Kontakt.vue';
import Kassid from './views/Kassid.vue';
import Koerad from './views/Koerad.vue';
import Kass1 from './views/Kass1.vue';
import Kass2 from './views/Kass2.vue';
import Kass3 from './views/Kass3.vue';
import Kass4 from './views/Kass4.vue';
import Koer1 from './views/Koer1.vue';
import Koer2 from './views/Koer2.vue';
import Koer3 from './views/Koer3.vue';
import Koer4 from './views/Koer4.vue';
import Koer5 from './views/Koer5.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/loomad',
      name: 'loomad',
      component: Loomad,
    },
    {
      path: '/kaotatud',
      name: 'kaotatud',
      component: Kaotatud,
    },
    {
      path: '/toetamine',
      name: 'toetamine',
      component: Toetamine,
    },
    {
      path: '/varjupaigast',
      name: 'varjupaigast',
      component: Varjupaigast,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt,
    },
    {
      path: '/kassid',
      name: 'kassid',
      component: Kassid,
    },
    {
      path: '/koerad',
      name: 'koerad',
      component: Koerad,
    },
    {
      path: '/kass1',
      name: 'kass1',
      component: Kass1,
    },
    {
      path: '/kass2',
      name: 'kass2',
      component: Kass2,
    },
    {
      path: '/kass3',
      name: 'kass3',
      component: Kass3,
    },
    {
      path: '/kass4',
      name: 'kass4',
      component: Kass4,
    },
    {
      path: '/koer1',
      name: 'koer1',
      component: Koer1,
    },
    {
      path: '/koer2',
      name: 'koer2',
      component: Koer2,
    },
    {
      path: '/koer3',
      name: 'koer3',
      component: Koer3,
    },
    {
      path: '/koer4',
      name: 'koer4',
      component: Koer4,
    },
    {
      path: '/koer5',
      name: 'koer5',
      component: Koer5,
    },
  ],
});
