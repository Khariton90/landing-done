import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'

Vue.use(VueRouter)

const routes = [
//Домашняя страница
  { path: '/', name: 'Home', component: Home,
children: [{ path: '/#contacts', name:'cont'} ]
   },
  { path: '/news', name: 'news', component: News,
   },
//Страница проекты
  { path: '/projects', name: 'projects', component: () => import('../views/Projects.vue'),props: true },
//Страница квиза
  { path: '/quiz', name: 'quiz',component: () => import('../views/quiz.vue')},
//
{ path: '/Projects:id',     component: () => import('../views/Garage.vue'),

children: [{ path: '/projects/garage', name:'garage'}]},

{ path: '/Projects/:id',  component: () => import('../views/Workshop.vue'),

children: [{ path: '/projects/workshop', name:'workshop'} ]},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
scrollBehavior (to, from, savedPosition) {
     if (to.hash) {
        return {
          selector: to.hash , 
          offset: { x: false, y: 0 }
      }
      }
   else {
    return { x: 0, y: 0 }
  }
},

})
router.beforeEach((to, from, next) => {
  console.log(from)
  next()


})
export default router
