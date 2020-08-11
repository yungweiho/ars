import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home/Home';
import WorkList from '@/views/Work/WorkList';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work_list/:workid',
      name: 'WorkList',
      component: WorkList
    },
  ]
})