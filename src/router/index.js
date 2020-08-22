import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home/Home';
import WorkList from '@/views/Work/WorkList';
import Work from '@/views/Work/Work';
import Projects from '@/components/Projects';
import Intro from '@/components/Intro';
import Sphere from '@/views/Sphere/Sphere';
import Map from '@/views/Sphere/Map';



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
      component: WorkList,
      children: [
        {
          path: 'work/:workname',
          name: 'Work',
          component: Work
        }
      ]
    },
    {
      path: '/introduction',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/sphere',
      name: 'Sphere',
      component: Sphere
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    
  ]
})