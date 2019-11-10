import Vue from 'vue';
import Router from 'vue-router';
import About from '@/components/About';
import Game from '@/components/Game';
import Intro from '@/components/Intro';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Intro
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/console',
      component: Game
    }
  ]
})
