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
{ path: '/projects/garage', name:'garage',   component: () => import('../views/Garage.vue')},
{ path: '/projects/workshop', name:'workshop',  component: () => import('../views/Workshop.vue')},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
scrollBehavior (to, from, savedPosition) {

},

})
router.beforeEach((to, from, next) => {

  next()



})
export default router
