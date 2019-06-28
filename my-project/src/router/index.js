import Vue from 'vue'
import Router from 'vue-router'
import allposts from '@/components/allposts'
import addpost from '@/components/addpost'
import showpost from '@/components/edit'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'allposts',
      component: allposts
    },
    {
    	path:'/posts/:id',
    	name:'showpost',
    	component: showpost
    },
    {
    	path: '/new',
    	name: 'addpost',
    	component: addpost
    },
    {
    	path: '*',
    	name: 'error',
    	component: error
    }
  ]
})
